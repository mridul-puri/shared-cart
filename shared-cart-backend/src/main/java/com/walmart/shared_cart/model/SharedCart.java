package com.walmart.shared_cart.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class SharedCart {
    private String id;

    private String cartUrl;

    private String cartName;

    private User owner;

    private List<User> cartMembers;

    private double cartTotal;

    private int zipcode;

    private int totalMembers;

    public int getTotalMembers() {
        return cartMembers.size();
    }
}