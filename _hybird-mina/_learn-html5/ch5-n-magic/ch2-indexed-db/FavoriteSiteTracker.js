var database; // 全局变量

/**
 * 存储url的结构
 * @param {*} name 网站名
 * @param {*} url 
 * @param {*} description 
 * @param {*} notes 为什么喜欢这个网站
 * 
 * var a = new LinkRecord(name, url, description, notes);
 */
function LinkRecord(name, url, description, notes) {
  this.name = name;
  this.url = url;
  this.description = description;
  this.notes = notes;
}

// 窗口一旦加载
window.onload = function () {
  var request = window.indexedDB.open("LinksDB2", 1); // 创建本地数据库LinksDB2

  // 正常运行
  request.onsuccess = function(event) {
    console.log("Created or opened database successfully.");
    database = request.result; // Make the database available everywhere in the code.

    showLinks(); // It's now safe to load the data.
  };

  // 错误处理
  request.onerror = function (event) {
    console.log(request.error + " occurred.");
  };

  // 更新
  request.onupgradeneeded = function(event) {
    console.log("About to set up DB for the first time or upgrade it.");
    //console.log("Database changing from " + event.oldVersion + " to " + event.newVersion)
    
    var db = request.result;
    var objectStore = db.createObjectStore("Links", { keyPath: "url" });    
  }
};

/**
 * 新增url
 */
function addLink() {  
  // Collect the data from the form.
  var name = document.getElementById("name").value, //网站名
    url = document.getElementById("url").value, // url
    description = document.getElementById("description").value, // 网站描述
    notes = document.getElementById("notes").value; // 笔记
  
  var linkRecord = new LinkRecord(name, url, description, notes);
  console.log("Prepared LinkRecord object for " + linkRecord.name);
  
  var transaction = database.transaction(["Links"], "readwrite");
  var objectStore = transaction.objectStore("Links");

  var request = objectStore.put(linkRecord);
  request.onerror = function(event) {
    console.log(request.error + " occurred.");
  };

  request.onsuccess = function(event) {
    console.log("Successfully added link.");

    // Refresh the display. (For better performance, you could add just the one new item,
    // rather than refresh the whole list.)
    showLinks();
  };  
}

/**
 * 显示url
 */
function showLinks() {
  // console.log("About to refresh link list.");

  var transaction = database.transaction(["Links"], "readonly");
  var objectStore = transaction.objectStore("Links");

  var request = objectStore.openCursor();
  
  request.onerror = function (event) {
    console.log(request.error + " occurred.");
  };
  
  // Prepare the string of markup that will be inserted into the page.
  var markupToInsert = "";

  request.onsuccess = function (event) {    
    // Create a cursor.
    var cursor = event.target.result; // 控制光标

    // If there is data add it to the string and keep going.
    if (cursor) {
      var linkRecord = cursor.value;
      markupToInsert += "<a href=" + linkRecord.url + ">" + linkRecord.name + "</a> (" +
        "<span class='linkButton' data-url='" + linkRecord.url + "' onclick='getLinkDetails(this)'>Details</span>" + " " +
        "<span class='linkButton' data-url='" + linkRecord.url + "' onclick='deleteLink(this)'>Delete</span>" +
        ")<br>";

      // When the cursor steps to the next record (or reaches the end,
      // the request.onsuccess event fires again.).
      cursor.continue();
    }
    else {
      // You've reached the end of the results.

      // If there wasn't at least one result, substitute some placeholder text.
      if (markupToInsert == "") {
        markupToInsert = "<< No links. >>";
      }
      else {
        markupToInsert = "<i>Links you've added so far: </i><br>" + markupToInsert;
      }

      // Insert the markup.
      var resultsElement = document.getElementById("links");
      resultsElement.innerHTML = markupToInsert;

    }
  };
}

/**
 * 获取链接详情
 * @param {*} element 
 */
function getLinkDetails(element) {
  var url = element.getAttribute("data-url"); // data-url标记获取内容
  // console.log("About to get details for " + url);

  var transaction = database.transaction(["Links"], "readonly");
  var objectStore = transaction.objectStore("Links");

  var request = objectStore.get(url);

  request.onerror = function(event) {
    console.log(request.error + " occurred.");
  };

  request.onsuccess = function(event) {
    // console.log("Found matching record.");
    var linkRecord = request.result;

    var resultsElement = document.getElementById("linkDetails");
    resultsElement.innerHTML = "<b>" + linkRecord.name + "</b><br>" +
      "<b>URL:</b> " + linkRecord.url + "<br>" +
      "<b>Description:</b> " + linkRecord.description + "<br>" +
      "<b>Notes:</b> " + linkRecord.notes;
  }
}

/**
 * 删除url
 * @param {*} element 
 */
function deleteLink(element) {
  var url = element.getAttribute("data-url");
  console.log("About to delete " + url);

  var transaction = database.transaction(["Links"], "readwrite"); // 权限
  var objectStore = transaction.objectStore("Links");

  var request = objectStore.delete(url);

  // 删除
  request.onerror = function (event) {
    console.log(request.error + " occurred.");
  };

  request.onsuccess = function (event) {
    console.log("Deleted record.");

    // Refresh the display.
    showLinks();
  }
}


