package space.qmen.leaf.controller;

import space.qmen.leaf.domain.Task;
import space.qmen.leaf.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Restful HTTP 服务
 *
 * Created by bysocket on 07/02/2017.
 */
@RestController
public class TaskRestController {

    @Autowired
    private TaskService taskService;

    @RequestMapping(value = "/api/task/{id}", method = RequestMethod.GET)
    public Task findOneTask(@PathVariable("id") Long id) {
        return taskService.findTaskById(id);
    }

    @RequestMapping(value = "/api/task", method = RequestMethod.GET)
    public List<Task> findAllTask() {
        return taskService.findAllTask();
    }

    @RequestMapping(value = "/api/task", method = RequestMethod.POST)
    public void createTask(@RequestBody Task task) {
        taskService.saveTask(task);
    }

    @RequestMapping(value = "/api/task", method = RequestMethod.PUT)
    public void modifyTask(@RequestBody Task task) {
        taskService.updateTask(task);
    }

    @RequestMapping(value = "/api/task/{id}", method = RequestMethod.DELETE)
    public void modifyTask(@PathVariable("id") Long id) {
        taskService.deleteTask(id);
    }
}