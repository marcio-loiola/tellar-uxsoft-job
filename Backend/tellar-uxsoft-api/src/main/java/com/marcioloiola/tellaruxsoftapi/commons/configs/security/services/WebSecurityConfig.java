package com.marcioloiola.tellaruxsoftapi.commons.configs.security.services;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig {

    private final String[] REQUEST_USERS_PERMIT_ALL = {
            "/users",
            "/users/edit/{id}",
            "/users/delete/{id}",
            "/projects",

    };

    private final String [] REQUEST_PROJECTS_PERMIT_ALL = {
            "/projects",

            "/projects/edit/{id}",
            "/projects/delete/{id}",
    };

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .exceptionHandling()
                .and()
                .sessionManagement()
                .and()
                .authorizeHttpRequests((requests) -> requests
                        .requestMatchers(REQUEST_USERS_PERMIT_ALL).permitAll()
                        .requestMatchers(REQUEST_PROJECTS_PERMIT_ALL).permitAll()
                        .anyRequest().authenticated()
                );

        return http.build();
    }

}