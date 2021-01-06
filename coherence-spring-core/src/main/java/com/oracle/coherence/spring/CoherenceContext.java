/*
 * Copyright (c) 2013, 2020, Oracle and/or its affiliates.
 *
 * Licensed under the Universal Permissive License v 1.0 as shown at
 * https://oss.oracle.com/licenses/upl.
 */
package com.oracle.coherence.spring;

import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

/**
 * A utility class to capture the {@link ApplicationContext}
 * so that it is available to Coherence classes that are not
 * managed by Spring.
 *
 * @author rl
 * @since 3.0
 */
@Component
public class CoherenceContext {


	/**
	 * The {@link ApplicationContext}.
	 */
	private static ApplicationContext ctx;


	/**
	 * Create a {@link CoherenceContext}.
	 *
	 * @param ctx the {@link ApplicationContext}
	 */
	public CoherenceContext(ApplicationContext ctx) {
		CoherenceContext.ctx = ctx;
	}

	/**
	 * Returns the {@link ApplicationContext}.
	 *
	 * @return the {@link ApplicationContext}
	 */
	public static ApplicationContext getApplicationContext() {
		return ctx;
	}
}