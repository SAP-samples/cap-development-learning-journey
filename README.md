# Welcome to the Learning Journey "Getting Started with the SAP Cloud Application Programming Model"
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/cap-development-learning-journey)](https://api.reuse.software/info/github.com/SAP-samples/cap-development-learning-journey)

Welcome to this repository for the learning journey "Getting Started with the SAP Cloud Application Programming Model" published on [SAP Learning](https://learning.sap.com/learning-journeys/). The repository contains an initial template for the exercises (*main* branch) as well as separate branches for the exercises with the corresponding sample solutions:

Branch | Related Exercise
---------|----------
`1_hello_world` | Create a Hello World Application
`2_domain_model` | Capture a Domain Model
`3_service_definition` | Define a Service
`4_SQLite_database` | Set Up a Persistent SQLite Database with Initial Data for Development
`5_associations` | Add Associations to the Domain Model
`6_common_reuse_aspects` | Use Pre-Defined Aspects
`7_localized_data` | Work with Localized Data, Code Lists and Common Reuse Types
`8_input_validation` | Implement Input Validation
`9_concurrency_control` | Add Optimistic Concurrency Control
`10_denormalized_views` | Define a Service Based on Denormalized Views
`11_.before_event_handler` | Provide a .before Event Handler
`12_.after_event_handler` | Provide a .after Event Handler
`13_custom_action` | Define and Implement a Custom Action 
`14_queries` | Use Queries in the Implementation of CAP Services  
`15_error_messages` | Use Localized Error Messages
`16_access_control` | Add Restrictions to the CDS Model

The *main* branch provides the initial template for the exercises that follow the exercise *Create a Hello World Application*. It contains an almost initial CAP project in which only a *test* folder has been created. In this *test* folder you will find *.http* files for testing the respective exercises and *.csv* files with data for filling the database tables.

## Requirements
For the exercises of the learning journey, SAP Business Application Studio is used as the development environment. It is assumed that you have access to this development tool.

> [!TIP]
> If this is not yet the case, you can gain access to the SAP Business Application Studio free of charge via the free tier model for SAP Business Technology Platform (SAP BTP). To do this, read tutorial [Get an Account on SAP BTP to Try Out Free Tier Service Plans](https://developers.sap.com/tutorials/btp-free-tier-account.html) on how to create a free account on SAP BTP. Based on this, video [SAP Business Application Studio Free Tier Model Onboarding](https://www.youtube.com/watch?v=-g7LZHqcbDQ) shows the necessary steps to set up the free tier plan for SAP Business Application Studio.

## Download and Installation

To clone this repository in SAP Business Application Studio, run the following command in a terminal::

```sh
git clone https://github.com/SAP-samples/cap-development-learning-journey.git
```

We recommend that you follow the instructions in the [learning journey](https://learning.sap.com/learning-journeys/getting-started-with-sap-cloud-application-programming-model) to get started.


To display the content of a specific branch or to continue development from a specific branch, you can use the following command to switch to a branch:

```sh
git checkout <branch>
```

## How to obtain support

If you need support, please post your issues in our [SAP Learning Group](https://community.sap.com/t5/sap-learning/gh-p/learning).


## Contributing
If you have suggestions on how to improve the tutorial, you're welcome to provide your input [here](https://github.com/SAP-samples/cap-development-learning-journey).

If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License
Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
