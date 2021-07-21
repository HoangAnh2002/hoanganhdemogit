package com.hoanganh.fullstackwithangular_hoanganh.service;


import com.hoanganh.fullstackwithangular_hoanganh.model.details.MyUserDetails;
import com.hoanganh.fullstackwithangular_hoanganh.model.details.User;
import com.hoanganh.fullstackwithangular_hoanganh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUserName(userName);
        user.orElseThrow(()-> new UsernameNotFoundException("Not found: "+userName));

        return user.map(MyUserDetails::new).get();
    }
}
