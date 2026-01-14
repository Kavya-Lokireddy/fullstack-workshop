package com.oop_advanced.payment;

public interface Payable {
	
	abstract double getPaymentAmount();
	
	default void printPaymentInfo() {
		
		System.out.println("Payment Amount: $"+getPaymentAmount());
		
	}

}
