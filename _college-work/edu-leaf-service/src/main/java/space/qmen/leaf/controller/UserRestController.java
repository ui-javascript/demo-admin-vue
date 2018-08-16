package space.qmen.leaf.controller;

import space.qmen.leaf.domain.User;
import space.qmen.leaf.service.UserService;
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
public class UserRestController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/api/user/{id}", method = RequestMethod.GET)
    public User findOneUser(@PathVariable("id") Long id) {
        return userService.findUserById(id);
    }

    @RequestMapping(value = "/api/user", method = RequestMethod.GET)
    public List<User> findAllUser() {
        return userService.findAllUser();
    }

    @RequestMapping(value = "/api/user", method = RequestMethod.POST)
    public void createUser(@RequestBody User user) {
        userService.saveUser(user);
    }

    @RequestMapping(value = "/api/user", method = RequestMethod.PUT)
    public void modifyUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @RequestMapping(value = "/api/user/{id}", method = RequestMethod.DELETE)
    public void modifyUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
    }
}