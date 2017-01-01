---
layout: custompost
title:  HTCondor DAGMan management with with dagmanager
date:   2016-12-31 00:09:00 -0500
categories: condor dagman dagmanager
---


<a class='underlined' href='https://research.cs.wisc.edu/htcondor/'>HTCondor</a> is a an open-source framework for high throughput computing developed at the University of Wisconsin--Madison. One of the most useful features of HTCondor is the Directed Acyclic Graph Manager (DAGMan), a tool for submitting and managing a high volume of interrelated jobs.

In my everyday work, I rely *heavily* on DAGMan. However, I've found when the number of jobs becomes large, actually making the DAGMan submission file can become a pain. This issue prompted me to make [dagmanager](https://github.com/jrbourbeau/dagmanager), a tool that helps build and submit complex DAGMan submission files in a straight-forward manner with minimal hassle.

Dagmanager can be found on its <a class='underlined' href='http://www.jamesbourbeau.com/dagmanager'>project page</a> and on <a class='underlined' href='https://github.com/jrbourbeau/dagmanager'>Github</a>.
