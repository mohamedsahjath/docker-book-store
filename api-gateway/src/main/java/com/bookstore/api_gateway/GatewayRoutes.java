package com.bookstore.api_gateway;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.function.RouterFunction;
import org.springframework.web.servlet.function.ServerResponse;

import static org.springframework.cloud.gateway.server.mvc.filter.BeforeFilterFunctions.uri;
import static org.springframework.cloud.gateway.server.mvc.handler.GatewayRouterFunctions.route;
import static org.springframework.cloud.gateway.server.mvc.handler.HandlerFunctions.http;

@Configuration
public class GatewayRoutes {

    @Bean
    public RouterFunction<ServerResponse> bookRoutes() {
        return route("book-api")
                .GET("/books", http())
                .POST("/books", http())
                .GET("/books/{id}", http())
                .DELETE("/books/{id}", http())
                .before(uri("http://book-api:8081"))
                .build();
    }

    @Bean
    public RouterFunction<ServerResponse> customerRoutes() {
        return route("customer-api")
                .GET("/customers", http())
                .POST("/customers", http())
                .GET("/customers/{id}", http())
                .DELETE("/customers/{id}", http())
                .before(uri("http://customer-api:8082"))
                .build();
    }
}