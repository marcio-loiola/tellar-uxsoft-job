package com.marcioloiola.tellaruxsoftapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;

@SpringBootApplication



public class TellarUxsoftApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TellarUxsoftApiApplication.class, args);
	}

}
