---
layout: custompost
title:  HTCondor DAGMan management with with dagmanager
date:   2016-12-31 00:09:00 -0500
categories: condor dagman dagmanager
---


The Directed Acyclic Graph Manager (DAGMan) is an extremely useful tool for submitting and managing a high voume of [HTCondor](https://research.cs.wisc.edu/htcondor/) jobs. However, when the number of jobs becomes large, especially when there are inter-job dependencies, actually making the DAGMan submission file can become a pain.

This issue prompted me to make **dagmanager**, a project that helps build and submit complex DAGMan submission files in a straight-forward manner.

Dagmanager can be found on it's <a class='underlined' href='http://www.jamesbourbeau.com/dagmanager'>project page</a> and on <a class='underlined' href='https://github.com/jrbourbeau/dagmanager'>Github</a>.
