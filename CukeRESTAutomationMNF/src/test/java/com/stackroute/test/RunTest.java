package com.stackroute.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		  features = "src/test/java/com/stackroute/test/features",
		  glue = "com.stackroute.test.stepdefinitions",
		  plugin = { 
		    "pretty",
		      "html:target/cucumber",
		  } 
		)
public class RunTest {

}
