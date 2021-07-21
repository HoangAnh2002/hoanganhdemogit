package com.hoanganh.fullstackwithangular_hoanganh.controller;

import com.hoanganh.fullstackwithangular_hoanganh.model.User;
import com.hoanganh.fullstackwithangular_hoanganh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class WebappController {

    @Autowired
    private UserRepository userRepository;
    @GetMapping("/register")
    public String showRegisterForm(Model model) {
        model.addAttribute("user", new User());
        return "signup";
    }
    @PostMapping("/process_register")
    public String processRegister(User user)
    {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String passwordEncoder  = encoder.encode(user.getPassword());
        user.setPassword(passwordEncoder);
        userRepository.save(user);
        return "signup_success";
    }
    @GetMapping("/")
    public String home()
    {
        return "index";
    }
}
