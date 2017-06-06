package com.stackroute.test.stepdefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.io.IOException;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.entity.ContentType;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

public class RESTFactory {

	@SuppressWarnings("deprecation")
	  HttpClient client = new DefaultHttpClient();
	  static HttpResponse httpResponse = null;
	  static String responseString = null;
	  String getURL = "";

	  public void getRequest(String url) throws ClientProtocolException, IOException{
	    RequestConfig requestConfig = RequestConfig.custom().setConnectionRequestTimeout(20000).setConnectTimeout(20000).setSocketTimeout(20000).build();
	    HttpClientBuilder builder = HttpClientBuilder.create().setDefaultRequestConfig(requestConfig);
	    getURL = url;
	    HttpUriRequest request = new HttpGet(url);

	    httpResponse = builder.build().execute(request);

	  }

	  public void verifyStatusCode(int statusCode) throws ClientProtocolException, IOException {
	    assertEquals(statusCode, httpResponse.getStatusLine().getStatusCode());
	  }

	  public void verifyResponseType(String type){
	    String mimeType = ContentType.getOrDefault(httpResponse.getEntity()).getMimeType();
	    assertTrue(mimeType.contains(type));
	  }

	  public void verifyResponseData(String responseData) throws ParseException, IOException{
	    HttpEntity entity = httpResponse.getEntity();
	    responseString = EntityUtils.toString(entity, "UTF-8");

	    assertTrue(responseString.contains(responseData));
	  }
}
