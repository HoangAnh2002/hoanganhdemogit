package com.hoanganh.fullstackwithangular_hoanganh.details;

import com.hoanganh.fullstackwithangular_hoanganh.model.User;
import com.hoanganh.fullstackwithangular_hoanganh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findUserByEmail(email);
        if (user == null)
        {
            throw new UsernameNotFoundException("Not found user");
        }
        return new CustomUserDetails(user);
    }
}
