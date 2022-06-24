package com.midasit.midascafe.service;

import com.midasit.midascafe.dto.UserDto;
import com.midasit.midascafe.entity.User;
import com.midasit.midascafe.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void signupUsers(@RequestBody UserDto data){
        User newUser = new User();
        newUser.setName(data.getUserName());
        newUser.setUserEmail(data.getUserEmail());
        newUser.setUserRole(data.getUserRole());
        newUser.setUserPhonenumber(data.getUserPhonenumber());
        userRepository.save(newUser);
    }

    public boolean isUserInDB(UserDto data){

        String userName = data.getUserName();
        String userMail = data.getUserEmail();
        User user = userRepository.findByUserEmail(userMail).get();
        if(user==null){
            System.out.println("wrong member");
            return false;
        }
        if(!userName.equals(user.getName())){
            System.out.println("user is exist. But wrong name");
            return false;
        }
        return true;

    }

}
