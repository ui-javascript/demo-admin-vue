package space.qmen.leaf.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import space.qmen.leaf.domain.TaskUser;
import space.qmen.leaf.service.TaskUserService;

import java.util.List;

/**
 * 城市 Controller 实现 Restful HTTP 服务
 *
 * Created by bysocket on 07/02/2017.
 */
@RestController
public class TaskUserRestController {

    @Autowired
    private TaskUserService taskUserService;

    @RequestMapping(value = "/api/taskuser/{id}", method = RequestMethod.GET)
    public TaskUser findOneTaskUser(@PathVariable("id") Long id) {
        return taskUserService.findTaskUserById(id);
    }

    @RequestMapping(value = "/api/taskuser", method = RequestMethod.GET)
    public List<TaskUser> findAllTaskUser() {
        return taskUserService.findAllTaskUser();
    }

    @RequestMapping(value = "/api/taskuser", method = RequestMethod.POST)
    public void createTaskUser(@RequestBody TaskUser taskUser) {
        taskUserService.saveTaskUser(taskUser);
    }

    @RequestMapping(value = "/api/taskuser", method = RequestMethod.PUT)
    public void modifyTaskUser(@RequestBody TaskUser taskUser) {
        taskUserService.updateTaskUser(taskUser);
    }

    @RequestMapping(value = "/api/taskuser/{id}", method = RequestMethod.DELETE)
    public void modifyTaskUser(@PathVariable("id") Long id) {
        taskUserService.deleteTaskUser(id);
    }
}