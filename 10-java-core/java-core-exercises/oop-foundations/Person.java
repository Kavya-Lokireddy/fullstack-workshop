package com.oops;

public class Person {

	private String name;
	private int age;
	private String email;

	public Person(String name, int age, String email) {
		this.name = name;
//		this.age = age;
//		this.email = email;
		setAge(age);
		setEmail(email);
	}
	
	public Person() {
	
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		if(age>=0 && age<=150) {
			this.age = age;
		}else {
			System.err.println("Please enter the age in between 0-150!!!");
		}
		
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		if(email.contains("@")) {
			this.email = email;
		}else {
			System.err.println("The Email must contains @.Please check your email correctly!!!");
		}
		
	}
	
	@Override
	public String toString() {
		return "Person [name=" + name + ", age=" + age + ", email=" + email + "]";
	}

	public static void main(String[] args) {
		Person p1=new Person();
		p1.setAge(30);
		p1.setName("Harish");
		p1.setEmail("harish123email.com");
		System.out.println(p1);
		Person p3=new Person("Pooja",223,"pooja12@email.com");
		System.out.println(p3);
		Person p2=new Person("John",25,"john@email.com");
		System.out.println(p2);
		
		
	}

	

}
