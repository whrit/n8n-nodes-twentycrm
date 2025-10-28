## Table of Contents

  - [Overview | n8n Docs Creating nodes#](#overview-n8n-docs-creating-nodes)
    - [Build a node | n8n Docs Build a node#](#build-a-node-n8n-docs-build-a-node)
    - [Choose a node building style | n8n Docs Choose your node building approach#](#choose-a-node-building-style-n8n-docs-choose-your-node-building-approach)
      - [Set up your development environment | n8n Docs Set up your development environment#](#set-up-your-development-environment-n8n-docs-set-up-your-development-environment)
      - [Versioning | n8n Docs Node versioning#](#versioning-n8n-docs-node-versioning)
      - [Choose a node type | n8n Docs Node types: Trigger and Action#](#choose-a-node-type-n8n-docs-node-types-trigger-and-action)
        - [Tutorial: Build a declarative-style node | n8n Docs Build a declarative-style node#](#tutorial-build-a-declarative-style-node-n8n-docs-build-a-declarative-style-node)
        - [Error handling | n8n Docs Error handling in n8n nodes#](#error-handling-n8n-docs-error-handling-in-n8n-nodes)
        - [Plan a node | n8n Docs Plan a node#](#plan-a-node-n8n-docs-plan-a-node)
        - [Run your node locally | n8n Docs Run your node locally#](#run-your-node-locally-n8n-docs-run-your-node-locally)
          - [Tutorial: Build a programmatic-style node | n8n Docs Build a programmatic-style node#](#tutorial-build-a-programmatic-style-node-n8n-docs-build-a-programmatic-style-node)
          - [Choose node file structure | n8n Docs Node file structure#](#choose-node-file-structure-n8n-docs-node-file-structure)
          - [Node UI elements | n8n Docs Node user interface elements#](#node-ui-elements-n8n-docs-node-user-interface-elements)
          - [Deploy a node | n8n Docs Deploy a node#](#deploy-a-node-n8n-docs-deploy-a-node)
          - [Test a node | n8n Docs Test a node#](#test-a-node-n8n-docs-test-a-node)
            - [Using the n8n-node tool | n8n Docs Using the n8n-node tool#](#using-the-n8n-node-tool-n8n-docs-using-the-n8n-node-tool)
            - [Node building reference | n8n Docs Node building reference#](#node-building-reference-n8n-docs-node-building-reference)
            - [Code standards | n8n Docs Code standards#](#code-standards-n8n-docs-code-standards)
            - [Credentials files | n8n Docs Credentials file#](#credentials-files-n8n-docs-credentials-file)
            - [Node base file | n8n Docs Node base file#](#node-base-file-n8n-docs-node-base-file)
            - [Codex files | n8n Docs Node codex files#](#codex-files-n8n-docs-node-codex-files)
            - [Verification guidelines | n8n Docs Community node verification guidelines#](#verification-guidelines-n8n-docs-community-node-verification-guidelines)
            - [Install private nodes | n8n Docs Install private nodes#](#install-private-nodes-n8n-docs-install-private-nodes)
            - [Submit community nodes | n8n Docs Submit community nodes#](#submit-community-nodes-n8n-docs-submit-community-nodes)
            - [Node UI design | n8n Docs Design your node's user interface#](#node-ui-design-n8n-docs-design-your-nodes-user-interface)
            - [Node linter | n8n Docs n8n node linter#](#node-linter-n8n-docs-n8n-node-linter)
            - [Troubleshooting | n8n Docs Troubleshooting#](#troubleshooting-n8n-docs-troubleshooting)

---

## Overview | n8n Docs Creating nodes#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/overview.md "Edit this page")

# Creating nodes [\#](\#creating-nodes "Permanent link")

Learn how to build your own custom [nodes](../../../glossary/#node-n8n).

This section includes:

- Guidance on planning your build, including [which style to use](../plan/choose-node-method/).
- [Tutorials](../build/) for different node building styles.
- Instructions for [testing your node](../test/), including how to use the n8n [node linter](../test/node-linter/) and [troubleshooting](../test/troubleshooting-node-development/) support.
- How to [share your node](../deploy/submit-community-nodes/) with the community, submit it for [verification by n8n](../deploy/submit-community-nodes/), or use it as a [private node](../deploy/install-private-nodes/).
- [Reference material](../build/reference/), including UI elements and information on the individual files that make up a node.

## Prerequisites [\#](\#prerequisites "Permanent link")

This section assumes the following:

- Some familiarity with JavaScript and TypeScript.
- Ability to manage your own development environment, including git.
- Knowledge of npm, including creating and submitting packages.
- Familiarity with n8n, including a good understanding of [data structures](../../../data/data-structure/) and [item linking](../../../data/data-mapping/data-item-linking/).

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/overview.md "Edit this page")

# Creating nodes [\#](\#creating-nodes "Permanent link")

Learn how to build your own custom [nodes](../../../glossary/#node-n8n).

This section includes:

- Guidance on planning your build, including [which style to use](../plan/choose-node-method/).
- [Tutorials](../build/) for different node building styles.
- Instructions for [testing your node](../test/), including how to use the n8n [node linter](../test/node-linter/) and [troubleshooting](../test/troubleshooting-node-development/) support.
- How to [share your node](../deploy/submit-community-nodes/) with the community, submit it for [verification by n8n](../deploy/submit-community-nodes/), or use it as a [private node](../deploy/install-private-nodes/).
- [Reference material](../build/reference/), including UI elements and information on the individual files that make up a node.

## Prerequisites [\#](\#prerequisites "Permanent link")

This section assumes the following:

- Some familiarity with JavaScript and TypeScript.
- Ability to manage your own development environment, including git.
- Knowledge of npm, including creating and submitting packages.
- Familiarity with n8n, including a good understanding of [data structures](../../../data/data-structure/) and [item linking](../../../data/data-mapping/data-item-linking/).

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

### Build a node | n8n Docs Build a node#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/index.md "Edit this page")

# Build a node [\#](\#build-a-node "Permanent link")

This section provides tutorials on building nodes. It covers:

- [Tutorial: Build a declarative-style node](declarative-style-node/)
- [Reference](reference/) material on [file structure](reference/node-file-structure/), parameter definitions for [base](reference/node-base-files/), [codex](reference/node-codex-files/), and [credentials](reference/credentials-files/) files, [node UI elements](reference/ui-elements/), and more.

Coming soon:

- More tutorials
- Revised guidance on standards

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/index.md "Edit this page")

# Build a node [\#](\#build-a-node "Permanent link")

This section provides tutorials on building nodes. It covers:

- [Tutorial: Build a declarative-style node](declarative-style-node/)
- [Reference](reference/) material on [file structure](reference/node-file-structure/), parameter definitions for [base](reference/node-base-files/), [codex](reference/node-codex-files/), and [credentials](reference/credentials-files/) files, [node UI elements](reference/ui-elements/), and more.

Coming soon:

- More tutorials
- Revised guidance on standards

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

### Choose a node building style | n8n Docs Choose your node building approach#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/plan/choose-node-method.md "Edit this page")

# Choose your node building approach [\#](\#choose-your-node-building-approach "Permanent link")

n8n has two node-building styles, declarative and programmatic.

You should use the declarative style for most nodes. This style:

- Uses a JSON-based syntax, making it simpler to write, with less risk of introducing bugs.
- Is more future-proof.
- Supports integration with REST APIs.

The programmatic style is more verbose. You must use the programmatic style for:

- Trigger nodes
- Any node that isn't REST-based. This includes nodes that need to call a GraphQL API and nodes that use external dependencies.
- Any node that needs to transform incoming data.
- Full versioning. Refer to [Node versioning](../../build/reference/node-versioning/) for more information on types of versioning.

## Data handling differences [\#](\#data-handling-differences "Permanent link")

The main difference between the declarative and programmatic styles is how they handle incoming data and build API requests. The programmatic style requires an `execute()` method, which reads incoming data and parameters, then builds a request. The declarative style handles this using the `routing` key in the `operations` object. Refer to [Node base file](../../build/reference/node-base-files/) for more information on node parameters and the `execute()` method.

## Syntax differences [\#](\#syntax-differences "Permanent link")

To understand the difference between the declarative and programmatic styles, compare the two code snippets below. This example creates a simplified version of the SendGrid integration, called "FriendGrid." The following code snippets aren't complete: they emphasize the differences in the node building styles.

In programmatic style:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>75<br>76<br>77<br>78<br>79<br>80<br>81<br>82<br>83<br>84<br>85<br>86<br>87<br>88<br>89<br>90<br>91<br>92<br>93<br>``` | ```<br>import {<br>	IExecuteFunctions,<br>	INodeExecutionData,<br>	INodeType,<br>	INodeTypeDescription,<br>	IRequestOptions,<br>} from 'n8n-workflow';<br>// Create the FriendGrid class<br>export class FriendGrid implements INodeType {<br>  description: INodeTypeDescription = {<br>    displayName: 'FriendGrid',<br>    name: 'friendGrid',<br>    . . .<br>    properties: [<br>      {<br>        displayName: 'Resource',<br>        . . .<br>      },<br>      {<br>        displayName: 'Operation',<br>        name: 'operation',<br>        type: 'options',<br>        displayOptions: {<br>          show: {<br>              resource: [<br>              'contact',<br>              ],<br>          },<br>        },<br>        options: [<br>          {<br>            name: 'Create',<br>            value: 'create',<br>            description: 'Create a contact',<br>          },<br>        ],<br>        default: 'create',<br>        description: 'The operation to perform.',<br>      },<br>      {<br>        displayName: 'Email',<br>        name: 'email',<br>        . . .<br>      },<br>      {<br>        displayName: 'Additional Fields',<br>        // Sets up optional fields<br>      },<br>    ],<br>};<br>  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {<br>    let responseData;<br>    const resource = this.getNodeParameter('resource', 0) as string;<br>    const operation = this.getNodeParameter('operation', 0) as string;<br>    //Get credentials the user provided for this node<br>    const credentials = await this.getCredentials('friendGridApi') as IDataObject;<br>    if (resource === 'contact') {<br>      if (operation === 'create') {<br>      // Get email input<br>      const email = this.getNodeParameter('email', 0) as string;<br>      // Get additional fields input<br>      const additionalFields = this.getNodeParameter('additionalFields', 0) as IDataObject;<br>      const data: IDataObject = {<br>          email,<br>      };<br>      Object.assign(data, additionalFields);<br>      // Make HTTP request as defined in https://sendgrid.com/docs/api-reference/<br>      const options: IRequestOptions = {<br>        headers: {<br>            'Accept': 'application/json',<br>            'Authorization': `Bearer ${credentials.apiKey}`,<br>        },<br>        method: 'PUT',<br>        body: {<br>            contacts: [<br>            data,<br>            ],<br>        },<br>        url: `https://api.sendgrid.com/v3/marketing/contacts`,<br>        json: true,<br>      };<br>      responseData = await this.helpers.httpRequest(options);<br>      }<br>    }<br>    // Map data to n8n data<br>    return [this.helpers.returnJsonArray(responseData)];<br>  }<br>}<br>``` |

In declarative style:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>``` | ```<br>import { INodeType, INodeTypeDescription } from 'n8n-workflow';<br>// Create the FriendGrid class<br>export class FriendGrid implements INodeType {<br>  description: INodeTypeDescription = {<br>    displayName: 'FriendGrid',<br>    name: 'friendGrid',<br>    . . .<br>    // Set up the basic request configuration<br>    requestDefaults: {<br>      baseURL: 'https://api.sendgrid.com/v3/marketing'<br>    },<br>    properties: [<br>      {<br>        displayName: 'Resource',<br>        . . .<br>      },<br>      {<br>        displayName: 'Operation',<br>        name: 'operation',<br>        type: 'options',<br>        displayOptions: {<br>          show: {<br>            resource: [<br>              'contact',<br>            ],<br>          },<br>        },<br>        options: [<br>          {<br>            name: 'Create',<br>            value: 'create',<br>            description: 'Create a contact',<br>            // Add the routing object<br>            routing: {<br>              request: {<br>                method: 'POST',<br>                url: '=/contacts',<br>                send: {<br>                  type: 'body',<br>                  properties: {<br>                    email: {{$parameter["email"]}}<br>                  }<br>                }<br>              }<br>            },<br>            // Handle the response to contact creation<br>            output: {<br>              postReceive: [<br>                {<br>                  type: 'set',<br>                  properties: {<br>                    value: '={{ { "success": $response } }}'<br>                  }<br>                }<br>              ]<br>            }<br>          },<br>        ],<br>        default: 'create',<br>        description: 'The operation to perform.',<br>      },<br>      {<br>        displayName: 'Email',<br>        . . .<br>      },<br>      {<br>        displayName: 'Additional Fields',<br>        // Sets up optional fields<br>      },<br>    ],<br>  }<br>  // No execute method needed<br>}<br>``` |

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/plan/choose-node-method.md "Edit this page")

# Choose your node building approach [\#](\#choose-your-node-building-approach "Permanent link")

n8n has two node-building styles, declarative and programmatic.

You should use the declarative style for most nodes. This style:

- Uses a JSON-based syntax, making it simpler to write, with less risk of introducing bugs.
- Is more future-proof.
- Supports integration with REST APIs.

The programmatic style is more verbose. You must use the programmatic style for:

- Trigger nodes
- Any node that isn't REST-based. This includes nodes that need to call a GraphQL API and nodes that use external dependencies.
- Any node that needs to transform incoming data.
- Full versioning. Refer to [Node versioning](../../build/reference/node-versioning/) for more information on types of versioning.

## Data handling differences [\#](\#data-handling-differences "Permanent link")

The main difference between the declarative and programmatic styles is how they handle incoming data and build API requests. The programmatic style requires an `execute()` method, which reads incoming data and parameters, then builds a request. The declarative style handles this using the `routing` key in the `operations` object. Refer to [Node base file](../../build/reference/node-base-files/) for more information on node parameters and the `execute()` method.

## Syntax differences [\#](\#syntax-differences "Permanent link")

To understand the difference between the declarative and programmatic styles, compare the two code snippets below. This example creates a simplified version of the SendGrid integration, called "FriendGrid." The following code snippets aren't complete: they emphasize the differences in the node building styles.

In programmatic style:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>75<br>76<br>77<br>78<br>79<br>80<br>81<br>82<br>83<br>84<br>85<br>86<br>87<br>88<br>89<br>90<br>91<br>92<br>93<br>``` | ```<br>import {<br>	IExecuteFunctions,<br>	INodeExecutionData,<br>	INodeType,<br>	INodeTypeDescription,<br>	IRequestOptions,<br>} from 'n8n-workflow';<br>// Create the FriendGrid class<br>export class FriendGrid implements INodeType {<br>  description: INodeTypeDescription = {<br>    displayName: 'FriendGrid',<br>    name: 'friendGrid',<br>    . . .<br>    properties: [<br>      {<br>        displayName: 'Resource',<br>        . . .<br>      },<br>      {<br>        displayName: 'Operation',<br>        name: 'operation',<br>        type: 'options',<br>        displayOptions: {<br>          show: {<br>              resource: [<br>              'contact',<br>              ],<br>          },<br>        },<br>        options: [<br>          {<br>            name: 'Create',<br>            value: 'create',<br>            description: 'Create a contact',<br>          },<br>        ],<br>        default: 'create',<br>        description: 'The operation to perform.',<br>      },<br>      {<br>        displayName: 'Email',<br>        name: 'email',<br>        . . .<br>      },<br>      {<br>        displayName: 'Additional Fields',<br>        // Sets up optional fields<br>      },<br>    ],<br>};<br>  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {<br>    let responseData;<br>    const resource = this.getNodeParameter('resource', 0) as string;<br>    const operation = this.getNodeParameter('operation', 0) as string;<br>    //Get credentials the user provided for this node<br>    const credentials = await this.getCredentials('friendGridApi') as IDataObject;<br>    if (resource === 'contact') {<br>      if (operation === 'create') {<br>      // Get email input<br>      const email = this.getNodeParameter('email', 0) as string;<br>      // Get additional fields input<br>      const additionalFields = this.getNodeParameter('additionalFields', 0) as IDataObject;<br>      const data: IDataObject = {<br>          email,<br>      };<br>      Object.assign(data, additionalFields);<br>      // Make HTTP request as defined in https://sendgrid.com/docs/api-reference/<br>      const options: IRequestOptions = {<br>        headers: {<br>            'Accept': 'application/json',<br>            'Authorization': `Bearer ${credentials.apiKey}`,<br>        },<br>        method: 'PUT',<br>        body: {<br>            contacts: [<br>            data,<br>            ],<br>        },<br>        url: `https://api.sendgrid.com/v3/marketing/contacts`,<br>        json: true,<br>      };<br>      responseData = await this.helpers.httpRequest(options);<br>      }<br>    }<br>    // Map data to n8n data<br>    return [this.helpers.returnJsonArray(responseData)];<br>  }<br>}<br>``` |

In declarative style:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>``` | ```<br>import { INodeType, INodeTypeDescription } from 'n8n-workflow';<br>// Create the FriendGrid class<br>export class FriendGrid implements INodeType {<br>  description: INodeTypeDescription = {<br>    displayName: 'FriendGrid',<br>    name: 'friendGrid',<br>    . . .<br>    // Set up the basic request configuration<br>    requestDefaults: {<br>      baseURL: 'https://api.sendgrid.com/v3/marketing'<br>    },<br>    properties: [<br>      {<br>        displayName: 'Resource',<br>        . . .<br>      },<br>      {<br>        displayName: 'Operation',<br>        name: 'operation',<br>        type: 'options',<br>        displayOptions: {<br>          show: {<br>            resource: [<br>              'contact',<br>            ],<br>          },<br>        },<br>        options: [<br>          {<br>            name: 'Create',<br>            value: 'create',<br>            description: 'Create a contact',<br>            // Add the routing object<br>            routing: {<br>              request: {<br>                method: 'POST',<br>                url: '=/contacts',<br>                send: {<br>                  type: 'body',<br>                  properties: {<br>                    email: {{$parameter["email"]}}<br>                  }<br>                }<br>              }<br>            },<br>            // Handle the response to contact creation<br>            output: {<br>              postReceive: [<br>                {<br>                  type: 'set',<br>                  properties: {<br>                    value: '={{ { "success": $response } }}'<br>                  }<br>                }<br>              ]<br>            }<br>          },<br>        ],<br>        default: 'create',<br>        description: 'The operation to perform.',<br>      },<br>      {<br>        displayName: 'Email',<br>        . . .<br>      },<br>      {<br>        displayName: 'Additional Fields',<br>        // Sets up optional fields<br>      },<br>    ],<br>  }<br>  // No execute method needed<br>}<br>``` |

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

#### Set up your development environment | n8n Docs Set up your development environment#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/node-development-environment.md "Edit this page")

# Set up your development environment [\#](\#set-up-your-development-environment "Permanent link")

This document lists the essential dependencies for developing a node, as well as guidance on setting up your editor.

## Requirements [\#](\#requirements "Permanent link")

To build and test a node, you need:

- Node.js and npm. Minimum version Node 18.17.0. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL (Windows Subsystem for Linux) [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
- A local instance of n8n. You can install n8n with `npm install n8n -g`, then follow the steps in [Run your node locally](../../test/run-node-locally/) to test your node.
- When [building verified community nodes](../../../community-nodes/build-community-nodes/), you must use the [`n8n-node` tool](../n8n-node/) to create and test your node.

You should also have [git](https://git-scm.com/) installed. This allows you to clone and use the [n8n-node-starter](https://github.com/n8n-io/n8n-nodes-starter).

## Editor setup [\#](\#editor-setup "Permanent link")

n8n recommends using [VS Code](https://code.visualstudio.com/) as your editor.

Install these extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

By using VS Code and these extensions, you get access to the n8n node linter's warnings as you code.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/node-development-environment.md "Edit this page")

# Set up your development environment [\#](\#set-up-your-development-environment "Permanent link")

This document lists the essential dependencies for developing a node, as well as guidance on setting up your editor.

## Requirements [\#](\#requirements "Permanent link")

To build and test a node, you need:

- Node.js and npm. Minimum version Node 18.17.0. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL (Windows Subsystem for Linux) [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
- A local instance of n8n. You can install n8n with `npm install n8n -g`, then follow the steps in [Run your node locally](../../test/run-node-locally/) to test your node.
- When [building verified community nodes](../../../community-nodes/build-community-nodes/), you must use the [`n8n-node` tool](../n8n-node/) to create and test your node.

You should also have [git](https://git-scm.com/) installed. This allows you to clone and use the [n8n-node-starter](https://github.com/n8n-io/n8n-nodes-starter).

## Editor setup [\#](\#editor-setup "Permanent link")

n8n recommends using [VS Code](https://code.visualstudio.com/) as your editor.

Install these extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

By using VS Code and these extensions, you get access to the n8n node linter's warnings as you code.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

#### Versioning | n8n Docs Node versioning#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/node-versioning.md "Edit this page")

# Node versioning [\#](\#node-versioning "Permanent link")

n8n supports node versioning. You can make changes to existing nodes without breaking the existing behavior by introducing a new version.

Be aware of how n8n decides which node version to load:

- If a user builds and saves a workflow using version 1, n8n continues to use version 1 in that workflow, even if you create and publish a version 2 of the node.
- When a user creates a new workflow and browses for nodes, n8n always loads the latest version of the node.

Versioning type restricted by node style

If you build a node using the declarative style, you can't use full versioning.

## Light versioning [\#](\#light-versioning "Permanent link")

This is available for all node types.

One node can contain more than one version, allowing small version increments without code duplication. To use this feature:

1. Change the main `version` parameter to an array, and add your version numbers, including your existing version.
2. You can then access the version parameter with `@version` in your `displayOptions` in any object (to control which versions n8n displays the object with). You can also query the version from a function using `const nodeVersion = this.getNode().typeVersion;`.

As an example, say you want to add versioning to the NasaPics node from the [Declarative node tutorial](../../declarative-style-node/), then configure a resource so that n8n only displays it in version 2 of the node. In your base `NasaPics.node.ts` file:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>``` | ```<br>{<br>    displayName: 'NASA Pics',<br>    name: 'NasaPics',<br>    icon: 'file:nasapics.svg',<br>    // List the available versions<br>    version: [1,2,3],<br>    // More basic parameters here<br>    properties: [<br>        // Add a resource that's only displayed for version2<br>        {<br>            displayName: 'Resource name',<br>            // More resource parameters<br>            displayOptions: {<br>                show: {<br>                    '@version': 2,<br>                },<br>            },<br>        },<br>    ],<br>}<br>``` |

## Full versioning [\#](\#full-versioning "Permanent link")

This isn't available for declarative-style nodes.

As an example, refer to the [Mattermost node](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Mattermost).

Full versioning summary:

- The base node file should extend `NodeVersionedType` instead of `INodeType`.
- The base node file should contain a description including the `defaultVersion` (usually the latest), other basic node metadata such as name, and a list of versions. It shouldn't contain any node functionality.
- n8n recommends using `v1`, `v2`, and so on, for version folder names.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/node-versioning.md "Edit this page")

# Node versioning [\#](\#node-versioning "Permanent link")

n8n supports node versioning. You can make changes to existing nodes without breaking the existing behavior by introducing a new version.

Be aware of how n8n decides which node version to load:

- If a user builds and saves a workflow using version 1, n8n continues to use version 1 in that workflow, even if you create and publish a version 2 of the node.
- When a user creates a new workflow and browses for nodes, n8n always loads the latest version of the node.

Versioning type restricted by node style

If you build a node using the declarative style, you can't use full versioning.

## Light versioning [\#](\#light-versioning "Permanent link")

This is available for all node types.

One node can contain more than one version, allowing small version increments without code duplication. To use this feature:

1. Change the main `version` parameter to an array, and add your version numbers, including your existing version.
2. You can then access the version parameter with `@version` in your `displayOptions` in any object (to control which versions n8n displays the object with). You can also query the version from a function using `const nodeVersion = this.getNode().typeVersion;`.

As an example, say you want to add versioning to the NasaPics node from the [Declarative node tutorial](../../declarative-style-node/), then configure a resource so that n8n only displays it in version 2 of the node. In your base `NasaPics.node.ts` file:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>``` | ```<br>{<br>    displayName: 'NASA Pics',<br>    name: 'NasaPics',<br>    icon: 'file:nasapics.svg',<br>    // List the available versions<br>    version: [1,2,3],<br>    // More basic parameters here<br>    properties: [<br>        // Add a resource that's only displayed for version2<br>        {<br>            displayName: 'Resource name',<br>            // More resource parameters<br>            displayOptions: {<br>                show: {<br>                    '@version': 2,<br>                },<br>            },<br>        },<br>    ],<br>}<br>``` |

## Full versioning [\#](\#full-versioning "Permanent link")

This isn't available for declarative-style nodes.

As an example, refer to the [Mattermost node](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Mattermost).

Full versioning summary:

- The base node file should extend `NodeVersionedType` instead of `INodeType`.
- The base node file should contain a description including the `defaultVersion` (usually the latest), other basic node metadata such as name, and a list of versions. It shouldn't contain any node functionality.
- n8n recommends using `v1`, `v2`, and so on, for version folder names.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

#### Choose a node type | n8n Docs Node types: Trigger and Action#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/plan/node-types.md "Edit this page")

# Node types: Trigger and Action [\#](\#node-types-trigger-and-action "Permanent link")

There are two node types you can build for n8n: trigger nodes and action nodes.

Both types provide integrations with external services.

## Trigger nodes [\#](\#trigger-nodes "Permanent link")

[Trigger nodes](../../../../glossary/#trigger-node-n8n) start a workflow and supply the initial data. A workflow can contain multiple trigger nodes but with each execution, only one of them will execute, depending on the triggering event.

There are three types of trigger nodes in n8n:

| Type | Description | Example Nodes |
| --- | --- | --- |
| Webhook | Nodes for services that support webhooks. These nodes listen for events and trigger workflows in real time. | [Zendesk Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Zendesk), [Telegram Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Telegram), [Brevo Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Brevo) |
| Polling | Nodes for services that don't support webhooks. These nodes periodically check for new data, triggering workflows when they detect updates. | [Airtable Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Airtable), [Gmail Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Google/Gmail), [Google Sheet Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Google/Sheet), [RssFeed Read Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/RssFeedRead) |
| Others | Nodes that handle real-time responses not related to HTTP requests or polling. This includes message queue nodes and time-based triggers. | [AMQP Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Amqp), [RabbitMQ Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/RabbitMQ), [MQTT Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/MQTT), [Schedule Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Schedule), [Email Trigger (IMAP)](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/EmailReadImap) |

## Action nodes [\#](\#action-nodes "Permanent link")

Action nodes perform operations as part of your workflow. These can include manipulating data, and triggering events in other systems.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/plan/node-types.md "Edit this page")

# Node types: Trigger and Action [\#](\#node-types-trigger-and-action "Permanent link")

There are two node types you can build for n8n: trigger nodes and action nodes.

Both types provide integrations with external services.

## Trigger nodes [\#](\#trigger-nodes "Permanent link")

[Trigger nodes](../../../../glossary/#trigger-node-n8n) start a workflow and supply the initial data. A workflow can contain multiple trigger nodes but with each execution, only one of them will execute, depending on the triggering event.

There are three types of trigger nodes in n8n:

| Type | Description | Example Nodes |
| --- | --- | --- |
| Webhook | Nodes for services that support webhooks. These nodes listen for events and trigger workflows in real time. | [Zendesk Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Zendesk), [Telegram Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Telegram), [Brevo Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Brevo) |
| Polling | Nodes for services that don't support webhooks. These nodes periodically check for new data, triggering workflows when they detect updates. | [Airtable Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Airtable), [Gmail Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Google/Gmail), [Google Sheet Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Google/Sheet), [RssFeed Read Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/RssFeedRead) |
| Others | Nodes that handle real-time responses not related to HTTP requests or polling. This includes message queue nodes and time-based triggers. | [AMQP Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Amqp), [RabbitMQ Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/RabbitMQ), [MQTT Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/MQTT), [Schedule Trigger](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Schedule), [Email Trigger (IMAP)](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/EmailReadImap) |

## Action nodes [\#](\#action-nodes "Permanent link")

Action nodes perform operations as part of your workflow. These can include manipulating data, and triggering events in other systems.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

##### Tutorial: Build a declarative-style node | n8n Docs Build a declarative-style node#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/declarative-style-node.md "Edit this page")

# Build a declarative-style node [\#](\#build-a-declarative-style-node "Permanent link")

This tutorial walks through building a declarative-style node. Before you begin, make sure this is the node style you need. Refer to [Choose your node building approach](../../plan/choose-node-method/) for more information.

## Prerequisites [\#](\#prerequisites "Permanent link")

You need the following installed on your development machine:

- [git](https://git-scm.com/downloads)
- Node.js and npm. Minimum version Node 18.17.0. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).

You need some understanding of:

- JavaScript/TypeScript
- REST APIs
- git

## Build your node [\#](\#build-your-node "Permanent link")

In this section, you'll clone n8n's node starter repository, and build a node that integrates the [NASA API](https://api.nasa.gov/). You'll create a node that uses two of NASA's services: APOD (Astronomy Picture of the Day) and Mars Rover Photos. To keep the code examples short, the node won't implement every available option for the Mars Rover Photos endpoint.

Existing node

n8n has a built-in NASA node. To avoid clashing with the existing node, you'll give your version a different name.

### Step 1: Set up the project [\#](\#step-1-set-up-the-project "Permanent link")

n8n provides a starter repository for node development. Using the starter ensures you have all necessary dependencies. It also provides a linter.

Clone the repository and navigate into the directory:

1. [Generate a new repository](https://github.com/n8n-io/n8n-nodes-starter/generate) from the template repository.
2. Clone your new repository:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```<br>git clone https://github.com/<your-organization>/<your-repo-name>.git n8n-nodes-nasa-pics<br>cd n8n-nodes-nasa-pics<br>``` |

The starter contains example nodes and credentials. Delete the following directories and files:

- `nodes/ExampleNode`
- `nodes/HTTPBin`
- `credentials/ExampleCredentials.credentials.ts`
- `credentials/HttpBinApi.credentials.ts`

Now create the following directories and files:

`nodes/NasaPics`

`nodes/NasaPics/NasaPics.node.json`

`nodes/NasaPics/NasaPics.node.ts`

`credentials/NasaPicsApi.credentials.ts`

These are the key files required for any node. Refer to [Node file structure](../reference/node-file-structure/) for more information on required files and recommended organization.

Now install the project dependencies:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm i<br>``` |

### Step 2: Add an icon [\#](\#step-2-add-an-icon "Permanent link")

Save the NASA SVG logo from [here](https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg) as `nasapics.svg` in `nodes/NasaPics/`.

n8n recommends using an SVG for your node icon, but you can also use PNG. If using PNG, the icon resolution should be 60x60px. Node icons should have a square or near-square aspect ratio.

Don't reference Font Awesome

If you want to use a Font Awesome icon in your node, download and embed the image.

### Step 3: Create the node [\#](\#step-3-create-the-node "Permanent link")

Every node must have a base file. Refer to [Node base file](../reference/node-base-files/) for detailed information about base file parameters.

In this example, the file is `NasaPics.node.ts`. To keep this tutorial short, you'll place all the node functionality in this one file. When building more complex nodes, you should consider splitting out your functionality into modules. Refer to [Node file structure](../reference/node-file-structure/) for more information.

#### Step 3.1: Imports [\#](\#step-31-imports "Permanent link")

Start by adding the import statements:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>import { INodeType, INodeTypeDescription } from 'n8n-workflow';<br>``` |

#### Step 3.2: Create the main class [\#](\#step-32-create-the-main-class "Permanent link")

The node must export an interface that implements INodeType. This interface must include a `description` interface, which in turn contains the `properties` array.

Class names and file names

Make sure the class name and the file name match. For example, given a class `NasaPics`, the filename must be `NasaPics.node.ts`.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```<br>export class NasaPics implements INodeType {<br>	description: INodeTypeDescription = {<br>		// Basic node details will go here<br>		properties: [<br>		// Resources and operations will go here<br>		]<br>	};<br>}<br>``` |

#### Step 3.3: Add node details [\#](\#step-33-add-node-details "Permanent link")

All nodes need some basic parameters, such as their display name, icon, and the basic information for making a request using the node. Add the following to the `description`:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>``` | ```<br>displayName: 'NASA Pics',<br>name: 'nasaPics',<br>icon: 'file:nasapics.svg',<br>group: ['transform'],<br>version: 1,<br>subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',<br>description: 'Get data from NASAs API',<br>defaults: {<br>	name: 'NASA Pics',<br>},<br>inputs: ['main'],<br>outputs: ['main'],<br>credentials: [<br>	{<br>		name: 'NasaPicsApi',<br>		required: true,<br>	},<br>],<br>requestDefaults: {<br>	baseURL: 'https://api.nasa.gov',<br>	headers: {<br>		Accept: 'application/json',<br>		'Content-Type': 'application/json',<br>	},<br>},<br>``` |

n8n uses some of the properties set in `description` to render the node in the Editor UI. These properties are `displayName`, `icon`, `description`, and `subtitle`.

#### Step 3.4: Add resources [\#](\#step-34-add-resources "Permanent link")

The resource object defines the API resource that the node uses. In this tutorial, you're creating a node to access two of NASA's API endpoints: `planetary/apod` and `mars-photos`. This means you need to define two resource options in `NasaPics.node.ts`. Update the `properties` array with the resource object:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>``` | ```<br>properties: [<br>	{<br>		displayName: 'Resource',<br>		name: 'resource',<br>		type: 'options',<br>		noDataExpression: true,<br>		options: [<br>			{<br>				name: 'Astronomy Picture of the Day',<br>				value: 'astronomyPictureOfTheDay',<br>			},<br>			{<br>				name: 'Mars Rover Photos',<br>				value: 'marsRoverPhotos',<br>			},<br>		],<br>		default: 'astronomyPictureOfTheDay',<br>	},<br>	// Operations will go here<br>]<br>``` |

`type` controls which UI element n8n displays for the resource, and tells n8n what type of data to expect from the user. `options` results in n8n adding a dropdown that allows users to choose one option. Refer to [Node UI elements](../reference/ui-elements/) for more information.

#### Step 3.5: Add operations [\#](\#step-35-add-operations "Permanent link")

The operations object defines the available operations on a resource.

In a declarative-style node, the operations object includes `routing` (within the `options` array). This sets up the details of the API call.

Add the following to the `properties` array, after the `resource` object:

|     |     |
| --- | --- |
| ```<br>  1<br>  2<br>  3<br>  4<br>  5<br>  6<br>  7<br>  8<br>  9<br> 10<br> 11<br> 12<br> 13<br> 14<br> 15<br> 16<br> 17<br> 18<br> 19<br> 20<br> 21<br> 22<br> 23<br> 24<br> 25<br> 26<br> 27<br> 28<br> 29<br> 30<br> 31<br> 32<br> 33<br> 34<br> 35<br> 36<br> 37<br> 38<br> 39<br> 40<br> 41<br> 42<br> 43<br> 44<br> 45<br> 46<br> 47<br> 48<br> 49<br> 50<br> 51<br> 52<br> 53<br> 54<br> 55<br> 56<br> 57<br> 58<br> 59<br> 60<br> 61<br> 62<br> 63<br> 64<br> 65<br> 66<br> 67<br> 68<br> 69<br> 70<br> 71<br> 72<br> 73<br> 74<br> 75<br> 76<br> 77<br> 78<br> 79<br> 80<br> 81<br> 82<br> 83<br> 84<br> 85<br> 86<br> 87<br> 88<br> 89<br> 90<br> 91<br> 92<br> 93<br> 94<br> 95<br> 96<br> 97<br> 98<br> 99<br>100<br>101<br>102<br>103<br>104<br>105<br>``` | ```<br>{<br>	displayName: 'Operation',<br>	name: 'operation',<br>	type: 'options',<br>	noDataExpression: true,<br>	displayOptions: {<br>		show: {<br>			resource: [<br>				'astronomyPictureOfTheDay',<br>			],<br>		},<br>	},<br>	options: [<br>		{<br>			name: 'Get',<br>			value: 'get',<br>			action: 'Get the APOD',<br>			description: 'Get the Astronomy Picture of the day',<br>			routing: {<br>				request: {<br>					method: 'GET',<br>					url: '/planetary/apod',<br>				},<br>			},<br>		},<br>	],<br>	default: 'get',<br>},<br>{<br>	displayName: 'Operation',<br>	name: 'operation',<br>	type: 'options',<br>	noDataExpression: true,<br>	displayOptions: {<br>		show: {<br>			resource: [<br>				'marsRoverPhotos',<br>			],<br>		},<br>	},<br>	options: [<br>		{<br>			name: 'Get',<br>			value: 'get',<br>			action: 'Get Mars Rover photos',<br>			description: 'Get photos from the Mars Rover',<br>			routing: {<br>				request: {<br>					method: 'GET',<br>				},<br>			},<br>		},<br>	],<br>	default: 'get',<br>},<br>{<br>	displayName: 'Rover name',<br>	description: 'Choose which Mars Rover to get a photo from',<br>	required: true,<br>	name: 'roverName',<br>	type: 'options',<br>	options: [<br>		{name: 'Curiosity', value: 'curiosity'},<br>		{name: 'Opportunity', value: 'opportunity'},<br>		{name: 'Perseverance', value: 'perseverance'},<br>		{name: 'Spirit', value: 'spirit'},<br>	],<br>	routing: {<br>		request: {<br>			url: '=/mars-photos/api/v1/rovers/{{$value}}/photos',<br>		},<br>	},<br>	default: 'curiosity',<br>	displayOptions: {<br>		show: {<br>			resource: [<br>				'marsRoverPhotos',<br>			],<br>		},<br>	},<br>},<br>{<br>	displayName: 'Date',<br>	description: 'Earth date',<br>	required: true,<br>	name: 'marsRoverDate',<br>	type: 'dateTime',<br>	default:'',<br>	displayOptions: {<br>		show: {<br>			resource: [<br>				'marsRoverPhotos',<br>			],<br>		},<br>	},<br>	routing: {<br>		request: {<br>			// You've already set up the URL. qs appends the value of the field as a query string<br>			qs: {<br>				earth_date: '={{ new Date($value).toISOString().substr(0,10) }}',<br>			},<br>		},<br>	},<br>},<br>// Optional/additional fields will go here<br>``` |

This code creates two operations: one to get today's APOD image, and another to send a get request for photos from one of the Mars Rovers. The object named `roverName` requires the user to choose which Rover they want photos from. The `routing` object in the Mars Rover operation references this to create the URL for the API call.

#### Step 3.6: Optional fields [\#](\#step-36-optional-fields "Permanent link")

Most APIs, including the NASA API that you're using in this example, have optional fields you can use to refine your query.

To avoid overwhelming users, n8n displays these under **Additional Fields** in the UI.

For this tutorial, you'll add one additional field, to allow users to pick a date to use with the APOD endpoint. Add the following to the properties array:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>``` | ```<br>{<br>	displayName: 'Additional Fields',<br>	name: 'additionalFields',<br>	type: 'collection',<br>	default: {},<br>	placeholder: 'Add Field',<br>	displayOptions: {<br>		show: {<br>			resource: [<br>				'astronomyPictureOfTheDay',<br>			],<br>			operation: [<br>				'get',<br>			],<br>		},<br>	},<br>	options: [<br>		{<br>			displayName: 'Date',<br>			name: 'apodDate',<br>			type: 'dateTime',<br>			default: '',<br>			routing: {<br>				request: {<br>					// You've already set up the URL. qs appends the value of the field as a query string<br>					qs: {<br>						date: '={{ new Date($value).toISOString().substr(0,10) }}',<br>					},<br>				},<br>			},<br>		},<br>	],									<br>}<br>``` |

### Step 4: Set up authentication [\#](\#step-4-set-up-authentication "Permanent link")

The NASA API requires users to authenticate with an API key.

Add the following to `nasaPicsApi.credentials.ts`:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>``` | ```<br>import {<br>	IAuthenticateGeneric,<br>	ICredentialType,<br>	INodeProperties,<br>} from 'n8n-workflow';<br>export class NasaPicsApi implements ICredentialType {<br>	name = 'NasaPicsApi';<br>	displayName = 'NASA Pics API';<br>	// Uses the link to this tutorial as an example<br>	// Replace with your own docs links when building your own nodes<br>	documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';<br>	properties: INodeProperties[] = [<br>		{<br>			displayName: 'API Key',<br>			name: 'apiKey',<br>			type: 'string',<br>			default: '',<br>		},<br>	];<br>	authenticate = {<br>		type: 'generic',<br>		properties: {<br>			qs: {<br>				'api_key': '={{$credentials.apiKey}}'<br>			}<br>		},<br>	} as IAuthenticateGeneric;<br>}<br>``` |

For more information about credentials files and options, refer to [Credentials file](../reference/credentials-files/).

### Step 5: Add node metadata [\#](\#step-5-add-node-metadata "Permanent link")

Metadata about your node goes in the JSON file at the root of your node. n8n refers to this as the codex file. In this example, the file is `NasaPics.node.json`.

Add the following code to the JSON file:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>``` | ```<br>{<br>	"node": "n8n-nodes-base.NasaPics",<br>	"nodeVersion": "1.0",<br>	"codexVersion": "1.0",<br>	"categories": [<br>		"Miscellaneous"<br>	],<br>	"resources": {<br>		"credentialDocumentation": [<br>			{<br>				"url": ""<br>			}<br>		],<br>		"primaryDocumentation": [<br>			{<br>				"url": ""<br>			}<br>		]<br>	}<br>}<br>``` |

For more information on these parameters, refer to [Node codex files](../reference/node-codex-files/).

### Step 6: Update the npm package details [\#](\#step-6-update-the-npm-package-details "Permanent link")

Your npm package details are in the `package.json` at the root of the project. It's essential to include the `n8n` object with links to the credentials and base node file. Update this file to include the following information:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>``` | ```<br>{<br>	// All node names must start with "n8n-nodes-"<br>	"name": "n8n-nodes-nasapics",<br>	"version": "0.1.0",<br>	"description": "n8n node to call NASA's APOD and Mars Rover Photo services.",<br>	"keywords": [<br>		// This keyword is required for community nodes<br>		"n8n-community-node-package"<br>	],<br>	"license": "MIT",<br>	"homepage": "https://n8n.io",<br>	"author": {<br>		"name": "Test",<br>		"email": "[email protected]"<br>	},<br>	"repository": {<br>		"type": "git",<br>		// Change the git remote to your own repository<br>		// Add the new URL here<br>		"url": "git+<your-repo-url>"<br>	},<br>	"main": "index.js",<br>	"scripts": {<br>		// don't change<br>	},<br>	"files": [<br>		"dist"<br>	],<br>	// Link the credentials and node<br>	"n8n": {<br>		"n8nNodesApiVersion": 1,<br>		"credentials": [<br>			"dist/credentials/NasaPicsApi.credentials.js"<br>		],<br>		"nodes": [<br>			"dist/nodes/NasaPics/NasaPics.node.js"<br>		]<br>	},<br>	"devDependencies": {<br>		// don't change<br>	},<br>	"peerDependencies": {<br>		// don't change<br>	}<br>}<br>``` |

You need to update the `package.json` to include your own information, such as your name and repository URL. For more information on npm `package.json` files, refer to [npm's package.json documentation](https://docs.npmjs.com/cli/v8/configuring-npm/package-json).

## Test your node [\#](\#test-your-node "Permanent link")

You can test your node as you build it by running it in a local n8n instance.

1. Install n8n using npm:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm install n8n -g<br>``` |

2. When you are ready to test your node, publish it locally:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```<br># In your node directory<br>npm run build<br>npm link<br>``` |

3. Install the node into your local n8n instance:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```<br># In the nodes directory within your n8n installation<br># node-package-name is the name from the package.json<br>npm link <node-package-name><br>``` |

Check your directory

Make sure you run `npm link <node-name>` in the nodes directory within your n8n installation. This can be:

- `~/.n8n/custom/`
- `~/.n8n/<your-custom-name>`: if your n8n installation set a different name using `N8N_CUSTOM_EXTENSIONS`.

4. Start n8n:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n start<br>``` |

5. Open n8n in your browser. You should see your nodes when you search for them in the nodes panel.

Node names

Make sure you search using the node name, not the package name. For example, if your npm package name is `n8n-nodes-weather-nodes`, and the package contains nodes named `rain`, `sun`, `snow`, you should search for `rain`, not `weather-nodes`.

### Troubleshooting [\#](\#troubleshooting "Permanent link")

If there's no `custom` directory in `~/.n8n` local installation, you have to create `custom` directory manually and run `npm init`:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```<br># In ~/.n8n directory run<br>mkdir custom <br>cd custom <br>npm init<br>``` |

## Next steps [\#](\#next-steps "Permanent link")

- [Deploy your node](../../deploy/).
- View an example of a declarative node: n8n's [Brevo node](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Brevo). Note that the main node is declarative, while the trigger node is in programmatic style.
- Learn about [node versioning](../reference/node-versioning/).

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/declarative-style-node.md "Edit this page")

# Build a declarative-style node [\#](\#build-a-declarative-style-node "Permanent link")

This tutorial walks through building a declarative-style node. Before you begin, make sure this is the node style you need. Refer to [Choose your node building approach](../../plan/choose-node-method/) for more information.

## Prerequisites [\#](\#prerequisites "Permanent link")

You need the following installed on your development machine:

- [git](https://git-scm.com/downloads)
- Node.js and npm. Minimum version Node 18.17.0. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).

You need some understanding of:

- JavaScript/TypeScript
- REST APIs
- git

## Build your node [\#](\#build-your-node "Permanent link")

In this section, you'll clone n8n's node starter repository, and build a node that integrates the [NASA API](https://api.nasa.gov/). You'll create a node that uses two of NASA's services: APOD (Astronomy Picture of the Day) and Mars Rover Photos. To keep the code examples short, the node won't implement every available option for the Mars Rover Photos endpoint.

Existing node

n8n has a built-in NASA node. To avoid clashing with the existing node, you'll give your version a different name.

### Step 1: Set up the project [\#](\#step-1-set-up-the-project "Permanent link")

n8n provides a starter repository for node development. Using the starter ensures you have all necessary dependencies. It also provides a linter.

Clone the repository and navigate into the directory:

1. [Generate a new repository](https://github.com/n8n-io/n8n-nodes-starter/generate) from the template repository.
2. Clone your new repository:

   |     |     |
   | --- | --- |
   | ```<br>1<br>2<br>``` | ```<br>git clone https://github.com/<your-organization>/<your-repo-name>.git n8n-nodes-nasa-pics<br>cd n8n-nodes-nasa-pics<br>``` |

The starter contains example nodes and credentials. Delete the following directories and files:

- `nodes/ExampleNode`
- `nodes/HTTPBin`
- `credentials/ExampleCredentials.credentials.ts`
- `credentials/HttpBinApi.credentials.ts`

Now create the following directories and files:

`nodes/NasaPics`

`nodes/NasaPics/NasaPics.node.json`

`nodes/NasaPics/NasaPics.node.ts`

`credentials/NasaPicsApi.credentials.ts`

These are the key files required for any node. Refer to [Node file structure](../reference/node-file-structure/) for more information on required files and recommended organization.

Now install the project dependencies:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm i<br>``` |

### Step 2: Add an icon [\#](\#step-2-add-an-icon "Permanent link")

Save the NASA SVG logo from [here](https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg) as `nasapics.svg` in `nodes/NasaPics/`.

n8n recommends using an SVG for your node icon, but you can also use PNG. If using PNG, the icon resolution should be 60x60px. Node icons should have a square or near-square aspect ratio.

Don't reference Font Awesome

If you want to use a Font Awesome icon in your node, download and embed the image.

### Step 3: Create the node [\#](\#step-3-create-the-node "Permanent link")

Every node must have a base file. Refer to [Node base file](../reference/node-base-files/) for detailed information about base file parameters.

In this example, the file is `NasaPics.node.ts`. To keep this tutorial short, you'll place all the node functionality in this one file. When building more complex nodes, you should consider splitting out your functionality into modules. Refer to [Node file structure](../reference/node-file-structure/) for more information.

#### Step 3.1: Imports [\#](\#step-31-imports "Permanent link")

Start by adding the import statements:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>import { INodeType, INodeTypeDescription } from 'n8n-workflow';<br>``` |

#### Step 3.2: Create the main class [\#](\#step-32-create-the-main-class "Permanent link")

The node must export an interface that implements INodeType. This interface must include a `description` interface, which in turn contains the `properties` array.

Class names and file names

Make sure the class name and the file name match. For example, given a class `NasaPics`, the filename must be `NasaPics.node.ts`.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```<br>export class NasaPics implements INodeType {<br>	description: INodeTypeDescription = {<br>		// Basic node details will go here<br>		properties: [<br>		// Resources and operations will go here<br>		]<br>	};<br>}<br>``` |

#### Step 3.3: Add node details [\#](\#step-33-add-node-details "Permanent link")

All nodes need some basic parameters, such as their display name, icon, and the basic information for making a request using the node. Add the following to the `description`:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>``` | ```<br>displayName: 'NASA Pics',<br>name: 'nasaPics',<br>icon: 'file:nasapics.svg',<br>group: ['transform'],<br>version: 1,<br>subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',<br>description: 'Get data from NASAs API',<br>defaults: {<br>	name: 'NASA Pics',<br>},<br>inputs: ['main'],<br>outputs: ['main'],<br>credentials: [<br>	{<br>		name: 'NasaPicsApi',<br>		required: true,<br>	},<br>],<br>requestDefaults: {<br>	baseURL: 'https://api.nasa.gov',<br>	headers: {<br>		Accept: 'application/json',<br>		'Content-Type': 'application/json',<br>	},<br>},<br>``` |

n8n uses some of the properties set in `description` to render the node in the Editor UI. These properties are `displayName`, `icon`, `description`, and `subtitle`.

#### Step 3.4: Add resources [\#](\#step-34-add-resources "Permanent link")

The resource object defines the API resource that the node uses. In this tutorial, you're creating a node to access two of NASA's API endpoints: `planetary/apod` and `mars-photos`. This means you need to define two resource options in `NasaPics.node.ts`. Update the `properties` array with the resource object:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>``` | ```<br>properties: [<br>	{<br>		displayName: 'Resource',<br>		name: 'resource',<br>		type: 'options',<br>		noDataExpression: true,<br>		options: [<br>			{<br>				name: 'Astronomy Picture of the Day',<br>				value: 'astronomyPictureOfTheDay',<br>			},<br>			{<br>				name: 'Mars Rover Photos',<br>				value: 'marsRoverPhotos',<br>			},<br>		],<br>		default: 'astronomyPictureOfTheDay',<br>	},<br>	// Operations will go here<br>]<br>``` |

`type` controls which UI element n8n displays for the resource, and tells n8n what type of data to expect from the user. `options` results in n8n adding a dropdown that allows users to choose one option. Refer to [Node UI elements](../reference/ui-elements/) for more information.

#### Step 3.5: Add operations [\#](\#step-35-add-operations "Permanent link")

The operations object defines the available operations on a resource.

In a declarative-style node, the operations object includes `routing` (within the `options` array). This sets up the details of the API call.

Add the following to the `properties` array, after the `resource` object:

|     |     |
| --- | --- |
| ```<br>  1<br>  2<br>  3<br>  4<br>  5<br>  6<br>  7<br>  8<br>  9<br> 10<br> 11<br> 12<br> 13<br> 14<br> 15<br> 16<br> 17<br> 18<br> 19<br> 20<br> 21<br> 22<br> 23<br> 24<br> 25<br> 26<br> 27<br> 28<br> 29<br> 30<br> 31<br> 32<br> 33<br> 34<br> 35<br> 36<br> 37<br> 38<br> 39<br> 40<br> 41<br> 42<br> 43<br> 44<br> 45<br> 46<br> 47<br> 48<br> 49<br> 50<br> 51<br> 52<br> 53<br> 54<br> 55<br> 56<br> 57<br> 58<br> 59<br> 60<br> 61<br> 62<br> 63<br> 64<br> 65<br> 66<br> 67<br> 68<br> 69<br> 70<br> 71<br> 72<br> 73<br> 74<br> 75<br> 76<br> 77<br> 78<br> 79<br> 80<br> 81<br> 82<br> 83<br> 84<br> 85<br> 86<br> 87<br> 88<br> 89<br> 90<br> 91<br> 92<br> 93<br> 94<br> 95<br> 96<br> 97<br> 98<br> 99<br>100<br>101<br>102<br>103<br>104<br>105<br>``` | ```<br>{<br>	displayName: 'Operation',<br>	name: 'operation',<br>	type: 'options',<br>	noDataExpression: true,<br>	displayOptions: {<br>		show: {<br>			resource: [<br>				'astronomyPictureOfTheDay',<br>			],<br>		},<br>	},<br>	options: [<br>		{<br>			name: 'Get',<br>			value: 'get',<br>			action: 'Get the APOD',<br>			description: 'Get the Astronomy Picture of the day',<br>			routing: {<br>				request: {<br>					method: 'GET',<br>					url: '/planetary/apod',<br>				},<br>			},<br>		},<br>	],<br>	default: 'get',<br>},<br>{<br>	displayName: 'Operation',<br>	name: 'operation',<br>	type: 'options',<br>	noDataExpression: true,<br>	displayOptions: {<br>		show: {<br>			resource: [<br>				'marsRoverPhotos',<br>			],<br>		},<br>	},<br>	options: [<br>		{<br>			name: 'Get',<br>			value: 'get',<br>			action: 'Get Mars Rover photos',<br>			description: 'Get photos from the Mars Rover',<br>			routing: {<br>				request: {<br>					method: 'GET',<br>				},<br>			},<br>		},<br>	],<br>	default: 'get',<br>},<br>{<br>	displayName: 'Rover name',<br>	description: 'Choose which Mars Rover to get a photo from',<br>	required: true,<br>	name: 'roverName',<br>	type: 'options',<br>	options: [<br>		{name: 'Curiosity', value: 'curiosity'},<br>		{name: 'Opportunity', value: 'opportunity'},<br>		{name: 'Perseverance', value: 'perseverance'},<br>		{name: 'Spirit', value: 'spirit'},<br>	],<br>	routing: {<br>		request: {<br>			url: '=/mars-photos/api/v1/rovers/{{$value}}/photos',<br>		},<br>	},<br>	default: 'curiosity',<br>	displayOptions: {<br>		show: {<br>			resource: [<br>				'marsRoverPhotos',<br>			],<br>		},<br>	},<br>},<br>{<br>	displayName: 'Date',<br>	description: 'Earth date',<br>	required: true,<br>	name: 'marsRoverDate',<br>	type: 'dateTime',<br>	default:'',<br>	displayOptions: {<br>		show: {<br>			resource: [<br>				'marsRoverPhotos',<br>			],<br>		},<br>	},<br>	routing: {<br>		request: {<br>			// You've already set up the URL. qs appends the value of the field as a query string<br>			qs: {<br>				earth_date: '={{ new Date($value).toISOString().substr(0,10) }}',<br>			},<br>		},<br>	},<br>},<br>// Optional/additional fields will go here<br>``` |

This code creates two operations: one to get today's APOD image, and another to send a get request for photos from one of the Mars Rovers. The object named `roverName` requires the user to choose which Rover they want photos from. The `routing` object in the Mars Rover operation references this to create the URL for the API call.

#### Step 3.6: Optional fields [\#](\#step-36-optional-fields "Permanent link")

Most APIs, including the NASA API that you're using in this example, have optional fields you can use to refine your query.

To avoid overwhelming users, n8n displays these under **Additional Fields** in the UI.

For this tutorial, you'll add one additional field, to allow users to pick a date to use with the APOD endpoint. Add the following to the properties array:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>``` | ```<br>{<br>	displayName: 'Additional Fields',<br>	name: 'additionalFields',<br>	type: 'collection',<br>	default: {},<br>	placeholder: 'Add Field',<br>	displayOptions: {<br>		show: {<br>			resource: [<br>				'astronomyPictureOfTheDay',<br>			],<br>			operation: [<br>				'get',<br>			],<br>		},<br>	},<br>	options: [<br>		{<br>			displayName: 'Date',<br>			name: 'apodDate',<br>			type: 'dateTime',<br>			default: '',<br>			routing: {<br>				request: {<br>					// You've already set up the URL. qs appends the value of the field as a query string<br>					qs: {<br>						date: '={{ new Date($value).toISOString().substr(0,10) }}',<br>					},<br>				},<br>			},<br>		},<br>	],									<br>}<br>``` |

### Step 4: Set up authentication [\#](\#step-4-set-up-authentication "Permanent link")

The NASA API requires users to authenticate with an API key.

Add the following to `nasaPicsApi.credentials.ts`:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>``` | ```<br>import {<br>	IAuthenticateGeneric,<br>	ICredentialType,<br>	INodeProperties,<br>} from 'n8n-workflow';<br>export class NasaPicsApi implements ICredentialType {<br>	name = 'NasaPicsApi';<br>	displayName = 'NASA Pics API';<br>	// Uses the link to this tutorial as an example<br>	// Replace with your own docs links when building your own nodes<br>	documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';<br>	properties: INodeProperties[] = [<br>		{<br>			displayName: 'API Key',<br>			name: 'apiKey',<br>			type: 'string',<br>			default: '',<br>		},<br>	];<br>	authenticate = {<br>		type: 'generic',<br>		properties: {<br>			qs: {<br>				'api_key': '={{$credentials.apiKey}}'<br>			}<br>		},<br>	} as IAuthenticateGeneric;<br>}<br>``` |

For more information about credentials files and options, refer to [Credentials file](../reference/credentials-files/).

### Step 5: Add node metadata [\#](\#step-5-add-node-metadata "Permanent link")

Metadata about your node goes in the JSON file at the root of your node. n8n refers to this as the codex file. In this example, the file is `NasaPics.node.json`.

Add the following code to the JSON file:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>``` | ```<br>{<br>	"node": "n8n-nodes-base.NasaPics",<br>	"nodeVersion": "1.0",<br>	"codexVersion": "1.0",<br>	"categories": [<br>		"Miscellaneous"<br>	],<br>	"resources": {<br>		"credentialDocumentation": [<br>			{<br>				"url": ""<br>			}<br>		],<br>		"primaryDocumentation": [<br>			{<br>				"url": ""<br>			}<br>		]<br>	}<br>}<br>``` |

For more information on these parameters, refer to [Node codex files](../reference/node-codex-files/).

### Step 6: Update the npm package details [\#](\#step-6-update-the-npm-package-details "Permanent link")

Your npm package details are in the `package.json` at the root of the project. It's essential to include the `n8n` object with links to the credentials and base node file. Update this file to include the following information:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>``` | ```<br>{<br>	// All node names must start with "n8n-nodes-"<br>	"name": "n8n-nodes-nasapics",<br>	"version": "0.1.0",<br>	"description": "n8n node to call NASA's APOD and Mars Rover Photo services.",<br>	"keywords": [<br>		// This keyword is required for community nodes<br>		"n8n-community-node-package"<br>	],<br>	"license": "MIT",<br>	"homepage": "https://n8n.io",<br>	"author": {<br>		"name": "Test",<br>		"email": "[email protected]"<br>	},<br>	"repository": {<br>		"type": "git",<br>		// Change the git remote to your own repository<br>		// Add the new URL here<br>		"url": "git+<your-repo-url>"<br>	},<br>	"main": "index.js",<br>	"scripts": {<br>		// don't change<br>	},<br>	"files": [<br>		"dist"<br>	],<br>	// Link the credentials and node<br>	"n8n": {<br>		"n8nNodesApiVersion": 1,<br>		"credentials": [<br>			"dist/credentials/NasaPicsApi.credentials.js"<br>		],<br>		"nodes": [<br>			"dist/nodes/NasaPics/NasaPics.node.js"<br>		]<br>	},<br>	"devDependencies": {<br>		// don't change<br>	},<br>	"peerDependencies": {<br>		// don't change<br>	}<br>}<br>``` |

You need to update the `package.json` to include your own information, such as your name and repository URL. For more information on npm `package.json` files, refer to [npm's package.json documentation](https://docs.npmjs.com/cli/v8/configuring-npm/package-json).

## Test your node [\#](\#test-your-node "Permanent link")

You can test your node as you build it by running it in a local n8n instance.

1. Install n8n using npm:

   |     |     |
   | --- | --- |
   | ```<br>1<br>``` | ```<br>npm install n8n -g<br>``` |

2. When you are ready to test your node, publish it locally:

   |     |     |
   | --- | --- |
   | ```<br>1<br>2<br>3<br>``` | ```<br># In your node directory<br>npm run build<br>npm link<br>``` |

3. Install the node into your local n8n instance:

   |     |     |
   | --- | --- |
   | ```<br>1<br>2<br>3<br>``` | ```<br># In the nodes directory within your n8n installation<br># node-package-name is the name from the package.json<br>npm link <node-package-name><br>``` |

   Check your directory

   Make sure you run `npm link <node-name>` in the nodes directory within your n8n installation. This can be:

- `~/.n8n/custom/`
- `~/.n8n/<your-custom-name>`: if your n8n installation set a different name using `N8N_CUSTOM_EXTENSIONS`.

4. Start n8n:

   |     |     |
   | --- | --- |
   | ```<br>1<br>``` | ```<br>n8n start<br>``` |

5. Open n8n in your browser. You should see your nodes when you search for them in the nodes panel.

   Node names

   Make sure you search using the node name, not the package name. For example, if your npm package name is `n8n-nodes-weather-nodes`, and the package contains nodes named `rain`, `sun`, `snow`, you should search for `rain`, not `weather-nodes`.

### Troubleshooting [\#](\#troubleshooting "Permanent link")

If there's no `custom` directory in `~/.n8n` local installation, you have to create `custom` directory manually and run `npm init`:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```<br># In ~/.n8n directory run<br>mkdir custom <br>cd custom <br>npm init<br>``` |

## Next steps [\#](\#next-steps "Permanent link")

- [Deploy your node](../../deploy/).
- View an example of a declarative node: n8n's [Brevo node](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Brevo). Note that the main node is declarative, while the trigger node is in programmatic style.
- Learn about [node versioning](../reference/node-versioning/).

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

##### Error handling | n8n Docs Error handling in n8n nodes#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/error-handling.md "Edit this page")

# Error handling in n8n nodes [\#](\#error-handling-in-n8n-nodes "Permanent link")

Proper error handling is crucial for creating robust n8n nodes that provide clear feedback to users when things go wrong. n8n provides two specialized error classes to handle different types of failures in node implementations:

- [**`NodeApiError`**](#nodeapierror): For API-related errors and external service failures
- [**`NodeOperationError`**](#nodeoperationerror): For operational errors, validation failures, and configuration issues

## NodeApiError [\#](\#nodeapierror "Permanent link")

Use `NodeApiError` when dealing with external API calls and HTTP requests. This error class is specifically designed to handle API response errors and provides enhanced features for parsing and presenting API-related failures such as:

- HTTP request failures
- external API errors
- authentication/authorization failures
- rate limiting errors
- service unavailable errors

Initialize new `NodeApiError` instances using the following pattern:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>new NodeApiError(node: INode, errorResponse: JsonObject, options?: NodeApiErrorOptions)<br>``` |

### Common usage patterns [\#](\#common-usage-patterns "Permanent link")

For basic API request failures, catch the error and wrap it in `NodeApiError`:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```<br>try {<br>	const response = await this.helpers.requestWithAuthentication.call(<br>		this,<br>		credentialType,<br>		options<br>	);<br>	return response;<br>} catch (error) {<br>	throw new NodeApiError(this.getNode(), error as JsonObject);<br>}<br>``` |

Handle specific HTTP status codes with custom messages:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>``` | ```<br>try {<br>	const response = await this.helpers.requestWithAuthentication.call(<br>		this,<br>		credentialType,<br>		options<br>	);<br>	return response;<br>} catch (error) {<br>	if (error.httpCode === "404") {<br>		const resource = this.getNodeParameter("resource", 0) as string;<br>		const errorOptions = {<br>			message: `${<br>				resource.charAt(0).toUpperCase() + resource.slice(1)<br>			} not found`,<br>			description:<br>				"The requested resource could not be found. Please check your input parameters.",<br>		};<br>		throw new NodeApiError(<br>			this.getNode(),<br>			error as JsonObject,<br>			errorOptions<br>		);<br>	}<br>	if (error.httpCode === "401") {<br>		throw new NodeApiError(this.getNode(), error as JsonObject, {<br>			message: "Authentication failed",<br>			description: "Please check your credentials and try again.",<br>		});<br>	}<br>	throw new NodeApiError(this.getNode(), error as JsonObject);<br>}<br>``` |

## NodeOperationError [\#](\#nodeoperationerror "Permanent link")

Use `NodeOperationError` for:

- operational errors
- validation failures
- configuration issues that aren't related to external API calls
- input validation errors
- missing required parameters
- data transformation errors
- workflow logic errors

Initialize new `NodeOperationError` instances using the following pattern:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>new NodeOperationError(node: INode, error: Error | string | JsonObject, options?: NodeOperationErrorOptions)<br>``` |

### Common usage patterns [\#](\#common-usage-patterns_1 "Permanent link")

Use `NodeOperationError` for validating user inputs:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```<br>const email = this.getNodeParameter("email", itemIndex) as string;<br>if (email.indexOf("@") === -1) {<br>	const description = `The email address '${email}' in the 'email' field isn't valid`;<br>	throw new NodeOperationError(this.getNode(), "Invalid email address", {<br>		description,<br>		itemIndex, // for multiple items, this will link the error to the specific item<br>	});<br>}<br>``` |

When processing multiple items, include the item index for better error context:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>``` | ```<br>for (let i = 0; i < items.length; i++) {<br>	try {<br>		// Process item<br>		const result = await processItem(items[i]);<br>		returnData.push(result);<br>	} catch (error) {<br>		if (this.continueOnFail()) {<br>			returnData.push({<br>				json: { error: error.message },<br>				pairedItem: { item: i },<br>			});<br>			continue;<br>		}<br>		throw new NodeOperationError(this.getNode(), error as Error, {<br>			description: error.description,<br>			itemIndex: i,<br>		});<br>	}<br>}<br>``` |

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/error-handling.md "Edit this page")

# Error handling in n8n nodes [\#](\#error-handling-in-n8n-nodes "Permanent link")

Proper error handling is crucial for creating robust n8n nodes that provide clear feedback to users when things go wrong. n8n provides two specialized error classes to handle different types of failures in node implementations:

- [**`NodeApiError`**](#nodeapierror): For API-related errors and external service failures
- [**`NodeOperationError`**](#nodeoperationerror): For operational errors, validation failures, and configuration issues

## NodeApiError [\#](\#nodeapierror "Permanent link")

Use `NodeApiError` when dealing with external API calls and HTTP requests. This error class is specifically designed to handle API response errors and provides enhanced features for parsing and presenting API-related failures such as:

- HTTP request failures
- external API errors
- authentication/authorization failures
- rate limiting errors
- service unavailable errors

Initialize new `NodeApiError` instances using the following pattern:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>new NodeApiError(node: INode, errorResponse: JsonObject, options?: NodeApiErrorOptions)<br>``` |

### Common usage patterns [\#](\#common-usage-patterns "Permanent link")

For basic API request failures, catch the error and wrap it in `NodeApiError`:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```<br>try {<br>	const response = await this.helpers.requestWithAuthentication.call(<br>		this,<br>		credentialType,<br>		options<br>	);<br>	return response;<br>} catch (error) {<br>	throw new NodeApiError(this.getNode(), error as JsonObject);<br>}<br>``` |

Handle specific HTTP status codes with custom messages:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>``` | ```<br>try {<br>	const response = await this.helpers.requestWithAuthentication.call(<br>		this,<br>		credentialType,<br>		options<br>	);<br>	return response;<br>} catch (error) {<br>	if (error.httpCode === "404") {<br>		const resource = this.getNodeParameter("resource", 0) as string;<br>		const errorOptions = {<br>			message: `${<br>				resource.charAt(0).toUpperCase() + resource.slice(1)<br>			} not found`,<br>			description:<br>				"The requested resource could not be found. Please check your input parameters.",<br>		};<br>		throw new NodeApiError(<br>			this.getNode(),<br>			error as JsonObject,<br>			errorOptions<br>		);<br>	}<br>	if (error.httpCode === "401") {<br>		throw new NodeApiError(this.getNode(), error as JsonObject, {<br>			message: "Authentication failed",<br>			description: "Please check your credentials and try again.",<br>		});<br>	}<br>	throw new NodeApiError(this.getNode(), error as JsonObject);<br>}<br>``` |

## NodeOperationError [\#](\#nodeoperationerror "Permanent link")

Use `NodeOperationError` for:

- operational errors
- validation failures
- configuration issues that aren't related to external API calls
- input validation errors
- missing required parameters
- data transformation errors
- workflow logic errors

Initialize new `NodeOperationError` instances using the following pattern:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>new NodeOperationError(node: INode, error: Error | string | JsonObject, options?: NodeOperationErrorOptions)<br>``` |

### Common usage patterns [\#](\#common-usage-patterns_1 "Permanent link")

Use `NodeOperationError` for validating user inputs:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```<br>const email = this.getNodeParameter("email", itemIndex) as string;<br>if (email.indexOf("@") === -1) {<br>	const description = `The email address '${email}' in the 'email' field isn't valid`;<br>	throw new NodeOperationError(this.getNode(), "Invalid email address", {<br>		description,<br>		itemIndex, // for multiple items, this will link the error to the specific item<br>	});<br>}<br>``` |

When processing multiple items, include the item index for better error context:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>``` | ```<br>for (let i = 0; i < items.length; i++) {<br>	try {<br>		// Process item<br>		const result = await processItem(items[i]);<br>		returnData.push(result);<br>	} catch (error) {<br>		if (this.continueOnFail()) {<br>			returnData.push({<br>				json: { error: error.message },<br>				pairedItem: { item: i },<br>			});<br>			continue;<br>		}<br>		throw new NodeOperationError(this.getNode(), error as Error, {<br>			description: error.description,<br>			itemIndex: i,<br>		});<br>	}<br>}<br>``` |

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

##### Plan a node | n8n Docs Plan a node#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/plan/index.md "Edit this page")

# Plan a node [\#](\#plan-a-node "Permanent link")

This section provides guidance on designing your node, including key technical decisions such as choosing your node building style.

When building a node, there are design choices you need to make before you start:

- Which [node type](node-types/) you need to build.
- Which [node building style](choose-node-method/) to use.
- Your [UI design and UX principles](node-ui-design/)
- Your node's [file structure](../build/reference/node-file-structure/).

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/plan/index.md "Edit this page")

# Plan a node [\#](\#plan-a-node "Permanent link")

This section provides guidance on designing your node, including key technical decisions such as choosing your node building style.

When building a node, there are design choices you need to make before you start:

- Which [node type](node-types/) you need to build.
- Which [node building style](choose-node-method/) to use.
- Your [UI design and UX principles](node-ui-design/)
- Your node's [file structure](../build/reference/node-file-structure/).

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

##### Run your node locally | n8n Docs Run your node locally#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/test/run-node-locally.md "Edit this page")

# Run your node locally [\#](\#run-your-node-locally "Permanent link")

You can test your node as you build it by running it in a local n8n instance.

1. Install n8n using npm:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm install n8n -g<br>``` |

2. When you are ready to test your node, publish it locally:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```<br># In your node directory<br>npm run build<br>npm link<br>``` |

3. Install the node into your local n8n instance:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```<br># In the nodes directory within your n8n installation<br># node-package-name is the name from the package.json<br>npm link <node-package-name><br>``` |

Check your directory

Make sure you run `npm link <node-name>` in the nodes directory within your n8n installation. This can be:

- `~/.n8n/custom/`
- `~/.n8n/<your-custom-name>`: if your n8n installation set a different name using `N8N_CUSTOM_EXTENSIONS`.

4. Start n8n:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n start<br>``` |

5. Open n8n in your browser. You should see your nodes when you search for them in the nodes panel.

Node names

Make sure you search using the node name, not the package name. For example, if your npm package name is `n8n-nodes-weather-nodes`, and the package contains nodes named `rain`, `sun`, `snow`, you should search for `rain`, not `weather-nodes`.

### Troubleshooting [\#](\#troubleshooting "Permanent link")

If there's no `custom` directory in `~/.n8n` local installation, you have to create `custom` directory manually and run `npm init`:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```<br># In ~/.n8n directory run<br>mkdir custom <br>cd custom <br>npm init<br>``` |

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/test/run-node-locally.md "Edit this page")

# Run your node locally [\#](\#run-your-node-locally "Permanent link")

You can test your node as you build it by running it in a local n8n instance.

1. Install n8n using npm:

   |     |     |
   | --- | --- |
   | ```<br>1<br>``` | ```<br>npm install n8n -g<br>``` |

2. When you are ready to test your node, publish it locally:

   |     |     |
   | --- | --- |
   | ```<br>1<br>2<br>3<br>``` | ```<br># In your node directory<br>npm run build<br>npm link<br>``` |

3. Install the node into your local n8n instance:

   |     |     |
   | --- | --- |
   | ```<br>1<br>2<br>3<br>``` | ```<br># In the nodes directory within your n8n installation<br># node-package-name is the name from the package.json<br>npm link <node-package-name><br>``` |

   Check your directory

   Make sure you run `npm link <node-name>` in the nodes directory within your n8n installation. This can be:

- `~/.n8n/custom/`
- `~/.n8n/<your-custom-name>`: if your n8n installation set a different name using `N8N_CUSTOM_EXTENSIONS`.

4. Start n8n:

   |     |     |
   | --- | --- |
   | ```<br>1<br>``` | ```<br>n8n start<br>``` |

5. Open n8n in your browser. You should see your nodes when you search for them in the nodes panel.

   Node names

   Make sure you search using the node name, not the package name. For example, if your npm package name is `n8n-nodes-weather-nodes`, and the package contains nodes named `rain`, `sun`, `snow`, you should search for `rain`, not `weather-nodes`.

### Troubleshooting [\#](\#troubleshooting "Permanent link")

If there's no `custom` directory in `~/.n8n` local installation, you have to create `custom` directory manually and run `npm init`:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```<br># In ~/.n8n directory run<br>mkdir custom <br>cd custom <br>npm init<br>``` |

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Tutorial: Build a programmatic-style node | n8n Docs Build a programmatic-style node#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/programmatic-style-node.md "Edit this page")

# Build a programmatic-style node [\#](\#build-a-programmatic-style-node "Permanent link")

This tutorial walks through building a programmatic-style node. Before you begin, make sure this is the node style you need. Refer to [Choose your node building approach](../../plan/choose-node-method/) for more information.

## Prerequisites [\#](\#prerequisites "Permanent link")

You need the following installed on your development machine:

- [git](https://git-scm.com/downloads)
- Node.js and npm. Minimum version Node 18.17.0. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).

You need some understanding of:

- JavaScript/TypeScript
- REST APIs
- git
- [Expressions](../../../../glossary/#expression-n8n) in n8n

## Build your node [\#](\#build-your-node "Permanent link")

In this section, you'll clone n8n's node starter repository, and build a node that integrates the [SendGrid](https://sendgrid.com/). You'll create a node that implements one piece of SendGrid functionality: create a contact.

Existing node

n8n has a built-in SendGrid node. To avoid clashing with the existing node, you'll give your version a different name.

### Step 1: Set up the project [\#](\#step-1-set-up-the-project "Permanent link")

n8n provides a starter repository for node development. Using the starter ensures you have all necessary dependencies. It also provides a linter.

Clone the repository and navigate into the directory:

1. [Generate a new repository](https://github.com/n8n-io/n8n-nodes-starter/generate) from the template repository.
2. Clone your new repository:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```<br>git clone https://github.com/<your-organization>/<your-repo-name>.git n8n-nodes-friendgrid<br>cd n8n-nodes-friendgrid<br>``` |

The starter contains example nodes and credentials. Delete the following directories and files:

- `nodes/ExampleNode`
- `nodes/HTTPBin`
- `credentials/ExampleCredentials.credentials.ts`
- `credentials/HttpBinApi.credentials.ts`

Now create the following directories and files:

`nodes/FriendGrid`

`nodes/FriendGrid/FriendGrid.node.json`

`nodes/FriendGrid/FriendGrid.node.ts`

`credentials/FriendGridApi.credentials.ts`

These are the key files required for any node. Refer to [Node file structure](../reference/node-file-structure/) for more information on required files and recommended organization.

Now install the project dependencies:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm i<br>``` |

### Step 2: Add an icon [\#](\#step-2-add-an-icon "Permanent link")

Save the SendGrid SVG logo from [here](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/SendGrid/sendGrid.svg) as `friendGrid.svg` in `nodes/FriendGrid/`.

n8n recommends using an SVG for your node icon, but you can also use PNG. If using PNG, the icon resolution should be 60x60px. Node icons should have a square or near-square aspect ratio.

Don't reference Font Awesome

If you want to use a Font Awesome icon in your node, download and embed the image.

### Step 3: Define the node in the base file [\#](\#step-3-define-the-node-in-the-base-file "Permanent link")

Every node must have a base file. Refer to [Node base file](../reference/node-base-files/) for detailed information about base file parameters.

In this example, the file is `FriendGrid.node.ts`. To keep this tutorial short, you'll place all the node functionality in this one file. When building more complex nodes, you should consider splitting out your functionality into modules. Refer to [Node file structure](../reference/node-file-structure/) for more information.

#### Step 3.1: Imports [\#](\#step-31-imports "Permanent link")

Start by adding the import statements:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>``` | ```<br>import {<br>	IExecuteFunctions,<br>} from 'n8n-core';<br>import {<br>	IDataObject,<br>	INodeExecutionData,<br>	INodeType,<br>	INodeTypeDescription,<br>    NodeConnectionType<br>} from 'n8n-workflow';<br>import {<br>	OptionsWithUri,<br>} from 'request';<br>``` |

#### Step 3.2: Create the main class [\#](\#step-32-create-the-main-class "Permanent link")

The node must export an interface that implements `INodeType`. This interface must include a `description` interface, which in turn contains the `properties` array.

Class names and file names

Make sure the class name and the file name match. For example, given a class `FriendGrid`, the filename must be `FriendGrid.node.ts`.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```<br>export class FriendGrid implements INodeType {<br>	description: INodeTypeDescription = {<br>		// Basic node details will go here<br>		properties: [<br>			// Resources and operations will go here<br>		],<br>	};<br>	// The execute method will go here<br>	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {<br>	}<br>}<br>``` |

#### Step 3.3: Add node details [\#](\#step-33-add-node-details "Permanent link")

All programmatic nodes need some basic parameters, such as their display name and icon. Add the following to the `description`:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>``` | ```<br>displayName: 'FriendGrid',<br>name: 'friendGrid',<br>icon: 'file:friendGrid.svg',<br>group: ['transform'],<br>version: 1,<br>description: 'Consume SendGrid API',<br>defaults: {<br>	name: 'FriendGrid',<br>},<br>inputs: [NodeConnectionType.Main],<br>outputs: [NodeConnectionType.Main],<br>credentials: [<br>	{<br>		name: 'friendGridApi',<br>		required: true,<br>	},<br>],<br>``` |

n8n uses some of the properties set in `description` to render the node in the Editor UI. These properties are `displayName`, `icon`, and `description`.

#### Step 3.4: Add the resource [\#](\#step-34-add-the-resource "Permanent link")

The resource object defines the API resource that the node uses. In this tutorial, you're creating a node to access one of SendGrid's API endpoints: `/v3/marketing/contacts`. This means you need to define a resource for this endpoint. Update the `properties` array with the resource object:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>``` | ```<br>{<br>	displayName: 'Resource',<br>	name: 'resource',<br>	type: 'options',<br>	options: [<br>		{<br>			name: 'Contact',<br>			value: 'contact',<br>		},<br>	],<br>	default: 'contact',<br>	noDataExpression: true,<br>	required: true,<br>	description: 'Create a new contact',<br>},<br>``` |

`type` controls which UI element n8n displays for the resource, and tells n8n what type of data to expect from the user. `options` results in n8n adding a dropdown that allows users to choose one option. Refer to [Node UI elements](../reference/ui-elements/) for more information.

#### Step 3.5: Add operations [\#](\#step-35-add-operations "Permanent link")

The operations object defines what you can do with a resource. It usually relates to REST API verbs (GET, POST, and so on). In this tutorial, there's one operation: create a contact. It has one required field, the email address for the contact the user creates.

Add the following to the `properties` array, after the `resource` object:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>``` | ```<br>{<br>	displayName: 'Operation',<br>	name: 'operation',<br>	type: 'options',<br>	displayOptions: {<br>		show: {<br>			resource: [<br>				'contact',<br>			],<br>		},<br>	},<br>	options: [<br>		{<br>			name: 'Create',<br>			value: 'create',<br>			description: 'Create a contact',<br>			action: 'Create a contact',<br>		},<br>	],<br>	default: 'create',<br>	noDataExpression: true,<br>},<br>{<br>	displayName: 'Email',<br>	name: 'email',<br>	type: 'string',<br>	required: true,<br>	displayOptions: {<br>		show: {<br>			operation: [<br>				'create',<br>			],<br>			resource: [<br>				'contact',<br>			],<br>		},<br>	},<br>	default:'',<br>	placeholder: '[email protected]',<br>	description:'Primary email for the contact',<br>},<br>``` |

#### Step 3.6: Add optional fields [\#](\#step-36-add-optional-fields "Permanent link")

Most APIs, including the SendGrid API that you're using in this example, have optional fields you can use to refine your query.

To avoid overwhelming users, n8n displays these under **Additional Fields** in the UI.

For this tutorial, you'll add two additional fields, to allow users to enter the contact's first name and last name. Add the following to the properties array:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>``` | ```<br>{<br>	displayName: 'Additional Fields',<br>	name: 'additionalFields',<br>	type: 'collection',<br>	placeholder: 'Add Field',<br>	default: {},<br>	displayOptions: {<br>		show: {<br>			resource: [<br>				'contact',<br>			],<br>			operation: [<br>				'create',<br>			],<br>		},<br>	},<br>	options: [<br>		{<br>			displayName: 'First Name',<br>			name: 'firstName',<br>			type: 'string',<br>			default: '',<br>		},<br>		{<br>			displayName: 'Last Name',<br>			name: 'lastName',<br>			type: 'string',<br>			default: '',<br>		},<br>	],<br>},<br>``` |

### Step 4: Add the execute method [\#](\#step-4-add-the-execute-method "Permanent link")

You've set up the node UI and basic information. It's time to map the node UI to API requests, and make the node actually do something.

The `execute` method runs every time the node runs. In this method, you have access to the input items and to the parameters that the user set in the UI, including the credentials.

Add the following the `execute` method in the `FriendGrid.node.ts`:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>``` | ```<br>// Handle data coming from previous nodes<br>const items = this.getInputData();<br>let responseData;<br>const returnData = [];<br>const resource = this.getNodeParameter('resource', 0) as string;<br>const operation = this.getNodeParameter('operation', 0) as string;<br>// For each item, make an API call to create a contact<br>for (let i = 0; i < items.length; i++) {<br>	if (resource === 'contact') {<br>		if (operation === 'create') {<br>			// Get email input<br>			const email = this.getNodeParameter('email', i) as string;<br>			// Get additional fields input<br>			const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;<br>			const data: IDataObject = {<br>				email,<br>			};<br>			Object.assign(data, additionalFields);<br>			// Make HTTP request according to https://sendgrid.com/docs/api-reference/<br>			const options: OptionsWithUri = {<br>				headers: {<br>					'Accept': 'application/json',<br>				},<br>				method: 'PUT',<br>				body: {<br>					contacts: [<br>						data,<br>					],<br>				},<br>				uri: `https://api.sendgrid.com/v3/marketing/contacts`,<br>				json: true,<br>			};<br>			responseData = await this.helpers.requestWithAuthentication.call(this, 'friendGridApi', options);<br>			returnData.push(responseData);<br>		}<br>	}<br>}<br>// Map data to n8n data structure<br>return [this.helpers.returnJsonArray(returnData)];<br>``` |

Note the following lines of this code:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```<br>const items = this.getInputData();<br>... <br>for (let i = 0; i < items.length; i++) {<br>	...<br>	const email = this.getNodeParameter('email', i) as string;<br>	...<br>}<br>``` |

Users can provide data in two ways:

- Entered directly in the node fields
- By mapping data from earlier nodes in the workflow

`getInputData()`, and the subsequent loop, allows the node to handle situations where data comes from a previous node. This includes supporting multiple inputs. This means that if, for example, the previous node outputs contact information for five people, your FriendGrid node can create five contacts.

### Step 5: Set up authentication [\#](\#step-5-set-up-authentication "Permanent link")

The SendGrid API requires users to authenticate with an API key.

Add the following to `FriendGridApi.credentials.ts`

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>``` | ```<br>import {<br>	IAuthenticateGeneric,<br>	ICredentialTestRequest,<br>	ICredentialType,<br>	INodeProperties,<br>} from 'n8n-workflow';<br>export class FriendGridApi implements ICredentialType {<br>	name = 'friendGridApi';<br>	displayName = 'FriendGrid API';<br>	properties: INodeProperties[] = [<br>		{<br>			displayName: 'API Key',<br>			name: 'apiKey',<br>			type: 'string',<br>			default: '',<br>		},<br>	];<br>	authenticate: IAuthenticateGeneric = {<br>		type: 'generic',<br>		properties: {<br>			headers: {<br>				Authorization: '=Bearer {{$credentials.apiKey}}',<br>			},<br>		},<br>	};<br>	test: ICredentialTestRequest = {<br>		request: {<br>			baseURL: 'https://api.sendgrid.com/v3',<br>			url: '/marketing/contacts',<br>		},<br>	};<br>}<br>``` |

For more information about credentials files and options, refer to [Credentials file](../reference/credentials-files/).

### Step 6: Add node metadata [\#](\#step-6-add-node-metadata "Permanent link")

Metadata about your node goes in the JSON file at the root of your node. n8n refers to this as the codex file. In this example, the file is `FriendGrid.node.json`.

Add the following code to the JSON file:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>``` | ```<br>{<br>	"node": "n8n-nodes-base.FriendGrid",<br>	"nodeVersion": "1.0",<br>	"codexVersion": "1.0",<br>	"categories": [<br>		"Miscellaneous"<br>	],<br>	"resources": {<br>		"credentialDocumentation": [<br>			{<br>				"url": ""<br>			}<br>		],<br>		"primaryDocumentation": [<br>			{<br>				"url": ""<br>			}<br>		]<br>	}<br>}<br>``` |

For more information on these parameters, refer to [Node codex files](../reference/node-codex-files/).

### Step 7: Update the npm package details [\#](\#step-7-update-the-npm-package-details "Permanent link")

Your npm package details are in the `package.json` at the root of the project. It's essential to include the `n8n` object with links to the credentials and base node file. Update this file to include the following information:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>``` | ```<br>{<br>	// All node names must start with "n8n-nodes-"<br>	"name": "n8n-nodes-friendgrid",<br>	"version": "0.1.0",<br>	"description": "n8n node to create contacts in SendGrid",<br>	"keywords": [<br>		// This keyword is required for community nodes<br>		"n8n-community-node-package"<br>	],<br>	"license": "MIT",<br>	"homepage": "https://n8n.io",<br>	"author": {<br>		"name": "Test",<br>		"email": "[email protected]"<br>	},<br>	"repository": {<br>		"type": "git",<br>		// Change the git remote to your own repository<br>		// Add the new URL here<br>		"url": "git+<your-repo-url>"<br>	},<br>	"main": "index.js",<br>	"scripts": {<br>		// don't change<br>	},<br>	"files": [<br>		"dist"<br>	],<br>	// Link the credentials and node<br>	"n8n": {<br>		"n8nNodesApiVersion": 1,<br>		"credentials": [<br>			"dist/credentials/FriendGridApi.credentials.js"<br>		],<br>		"nodes": [<br>			"dist/nodes/FriendGrid/FriendGrid.node.js"<br>		]<br>	},<br>	"devDependencies": {<br>		// don't change<br>	},<br>	"peerDependencies": {<br>		// don't change<br>	}<br>}<br>``` |

You need to update the `package.json` to include your own information, such as your name and repository URL. For more information on npm `package.json` files, refer to [npm's package.json documentation](https://docs.npmjs.com/cli/v8/configuring-npm/package-json).

## Test your node [\#](\#test-your-node "Permanent link")

You can test your node as you build it by running it in a local n8n instance.

1. Install n8n using npm:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm install n8n -g<br>``` |

2. When you are ready to test your node, publish it locally:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```<br># In your node directory<br>npm run build<br>npm link<br>``` |

3. Install the node into your local n8n instance:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```<br># In the nodes directory within your n8n installation<br># node-package-name is the name from the package.json<br>npm link <node-package-name><br>``` |

Check your directory

Make sure you run `npm link <node-name>` in the nodes directory within your n8n installation. This can be:

- `~/.n8n/custom/`
- `~/.n8n/<your-custom-name>`: if your n8n installation set a different name using `N8N_CUSTOM_EXTENSIONS`.

4. Start n8n:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n start<br>``` |

5. Open n8n in your browser. You should see your nodes when you search for them in the nodes panel.

Node names

Make sure you search using the node name, not the package name. For example, if your npm package name is `n8n-nodes-weather-nodes`, and the package contains nodes named `rain`, `sun`, `snow`, you should search for `rain`, not `weather-nodes`.

### Troubleshooting [\#](\#troubleshooting "Permanent link")

If there's no `custom` directory in `~/.n8n` local installation, you have to create `custom` directory manually and run `npm init`:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```<br># In ~/.n8n directory run<br>mkdir custom <br>cd custom <br>npm init<br>``` |

## Next steps [\#](\#next-steps "Permanent link")

- [Deploy your node](../../deploy/).
- View an example of a programmatic node: n8n's [Mattermost node](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Mattermost). This is an example of a more complex programmatic node structure.
- Learn about [node versioning](../reference/node-versioning/).
- Make sure you understand key concepts: [item linking](../../../../data/data-mapping/data-item-linking/item-linking-concepts/) and [data structures](../../../../data/data-structure/).

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/programmatic-style-node.md "Edit this page")

# Build a programmatic-style node [\#](\#build-a-programmatic-style-node "Permanent link")

This tutorial walks through building a programmatic-style node. Before you begin, make sure this is the node style you need. Refer to [Choose your node building approach](../../plan/choose-node-method/) for more information.

## Prerequisites [\#](\#prerequisites "Permanent link")

You need the following installed on your development machine:

- [git](https://git-scm.com/downloads)
- Node.js and npm. Minimum version Node 18.17.0. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).

You need some understanding of:

- JavaScript/TypeScript
- REST APIs
- git
- [Expressions](../../../../glossary/#expression-n8n) in n8n

## Build your node [\#](\#build-your-node "Permanent link")

In this section, you'll clone n8n's node starter repository, and build a node that integrates the [SendGrid](https://sendgrid.com/). You'll create a node that implements one piece of SendGrid functionality: create a contact.

Existing node

n8n has a built-in SendGrid node. To avoid clashing with the existing node, you'll give your version a different name.

### Step 1: Set up the project [\#](\#step-1-set-up-the-project "Permanent link")

n8n provides a starter repository for node development. Using the starter ensures you have all necessary dependencies. It also provides a linter.

Clone the repository and navigate into the directory:

1. [Generate a new repository](https://github.com/n8n-io/n8n-nodes-starter/generate) from the template repository.
2. Clone your new repository:

   |     |     |
   | --- | --- |
   | ```<br>1<br>2<br>``` | ```<br>git clone https://github.com/<your-organization>/<your-repo-name>.git n8n-nodes-friendgrid<br>cd n8n-nodes-friendgrid<br>``` |

The starter contains example nodes and credentials. Delete the following directories and files:

- `nodes/ExampleNode`
- `nodes/HTTPBin`
- `credentials/ExampleCredentials.credentials.ts`
- `credentials/HttpBinApi.credentials.ts`

Now create the following directories and files:

`nodes/FriendGrid`

`nodes/FriendGrid/FriendGrid.node.json`

`nodes/FriendGrid/FriendGrid.node.ts`

`credentials/FriendGridApi.credentials.ts`

These are the key files required for any node. Refer to [Node file structure](../reference/node-file-structure/) for more information on required files and recommended organization.

Now install the project dependencies:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm i<br>``` |

### Step 2: Add an icon [\#](\#step-2-add-an-icon "Permanent link")

Save the SendGrid SVG logo from [here](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/SendGrid/sendGrid.svg) as `friendGrid.svg` in `nodes/FriendGrid/`.

n8n recommends using an SVG for your node icon, but you can also use PNG. If using PNG, the icon resolution should be 60x60px. Node icons should have a square or near-square aspect ratio.

Don't reference Font Awesome

If you want to use a Font Awesome icon in your node, download and embed the image.

### Step 3: Define the node in the base file [\#](\#step-3-define-the-node-in-the-base-file "Permanent link")

Every node must have a base file. Refer to [Node base file](../reference/node-base-files/) for detailed information about base file parameters.

In this example, the file is `FriendGrid.node.ts`. To keep this tutorial short, you'll place all the node functionality in this one file. When building more complex nodes, you should consider splitting out your functionality into modules. Refer to [Node file structure](../reference/node-file-structure/) for more information.

#### Step 3.1: Imports [\#](\#step-31-imports "Permanent link")

Start by adding the import statements:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>``` | ```<br>import {<br>	IExecuteFunctions,<br>} from 'n8n-core';<br>import {<br>	IDataObject,<br>	INodeExecutionData,<br>	INodeType,<br>	INodeTypeDescription,<br>    NodeConnectionType<br>} from 'n8n-workflow';<br>import {<br>	OptionsWithUri,<br>} from 'request';<br>``` |

#### Step 3.2: Create the main class [\#](\#step-32-create-the-main-class "Permanent link")

The node must export an interface that implements `INodeType`. This interface must include a `description` interface, which in turn contains the `properties` array.

Class names and file names

Make sure the class name and the file name match. For example, given a class `FriendGrid`, the filename must be `FriendGrid.node.ts`.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```<br>export class FriendGrid implements INodeType {<br>	description: INodeTypeDescription = {<br>		// Basic node details will go here<br>		properties: [<br>			// Resources and operations will go here<br>		],<br>	};<br>	// The execute method will go here<br>	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {<br>	}<br>}<br>``` |

#### Step 3.3: Add node details [\#](\#step-33-add-node-details "Permanent link")

All programmatic nodes need some basic parameters, such as their display name and icon. Add the following to the `description`:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>``` | ```<br>displayName: 'FriendGrid',<br>name: 'friendGrid',<br>icon: 'file:friendGrid.svg',<br>group: ['transform'],<br>version: 1,<br>description: 'Consume SendGrid API',<br>defaults: {<br>	name: 'FriendGrid',<br>},<br>inputs: [NodeConnectionType.Main],<br>outputs: [NodeConnectionType.Main],<br>credentials: [<br>	{<br>		name: 'friendGridApi',<br>		required: true,<br>	},<br>],<br>``` |

n8n uses some of the properties set in `description` to render the node in the Editor UI. These properties are `displayName`, `icon`, and `description`.

#### Step 3.4: Add the resource [\#](\#step-34-add-the-resource "Permanent link")

The resource object defines the API resource that the node uses. In this tutorial, you're creating a node to access one of SendGrid's API endpoints: `/v3/marketing/contacts`. This means you need to define a resource for this endpoint. Update the `properties` array with the resource object:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>``` | ```<br>{<br>	displayName: 'Resource',<br>	name: 'resource',<br>	type: 'options',<br>	options: [<br>		{<br>			name: 'Contact',<br>			value: 'contact',<br>		},<br>	],<br>	default: 'contact',<br>	noDataExpression: true,<br>	required: true,<br>	description: 'Create a new contact',<br>},<br>``` |

`type` controls which UI element n8n displays for the resource, and tells n8n what type of data to expect from the user. `options` results in n8n adding a dropdown that allows users to choose one option. Refer to [Node UI elements](../reference/ui-elements/) for more information.

#### Step 3.5: Add operations [\#](\#step-35-add-operations "Permanent link")

The operations object defines what you can do with a resource. It usually relates to REST API verbs (GET, POST, and so on). In this tutorial, there's one operation: create a contact. It has one required field, the email address for the contact the user creates.

Add the following to the `properties` array, after the `resource` object:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>``` | ```<br>{<br>	displayName: 'Operation',<br>	name: 'operation',<br>	type: 'options',<br>	displayOptions: {<br>		show: {<br>			resource: [<br>				'contact',<br>			],<br>		},<br>	},<br>	options: [<br>		{<br>			name: 'Create',<br>			value: 'create',<br>			description: 'Create a contact',<br>			action: 'Create a contact',<br>		},<br>	],<br>	default: 'create',<br>	noDataExpression: true,<br>},<br>{<br>	displayName: 'Email',<br>	name: 'email',<br>	type: 'string',<br>	required: true,<br>	displayOptions: {<br>		show: {<br>			operation: [<br>				'create',<br>			],<br>			resource: [<br>				'contact',<br>			],<br>		},<br>	},<br>	default:'',<br>	placeholder: '[email protected]',<br>	description:'Primary email for the contact',<br>},<br>``` |

#### Step 3.6: Add optional fields [\#](\#step-36-add-optional-fields "Permanent link")

Most APIs, including the SendGrid API that you're using in this example, have optional fields you can use to refine your query.

To avoid overwhelming users, n8n displays these under **Additional Fields** in the UI.

For this tutorial, you'll add two additional fields, to allow users to enter the contact's first name and last name. Add the following to the properties array:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>``` | ```<br>{<br>	displayName: 'Additional Fields',<br>	name: 'additionalFields',<br>	type: 'collection',<br>	placeholder: 'Add Field',<br>	default: {},<br>	displayOptions: {<br>		show: {<br>			resource: [<br>				'contact',<br>			],<br>			operation: [<br>				'create',<br>			],<br>		},<br>	},<br>	options: [<br>		{<br>			displayName: 'First Name',<br>			name: 'firstName',<br>			type: 'string',<br>			default: '',<br>		},<br>		{<br>			displayName: 'Last Name',<br>			name: 'lastName',<br>			type: 'string',<br>			default: '',<br>		},<br>	],<br>},<br>``` |

### Step 4: Add the execute method [\#](\#step-4-add-the-execute-method "Permanent link")

You've set up the node UI and basic information. It's time to map the node UI to API requests, and make the node actually do something.

The `execute` method runs every time the node runs. In this method, you have access to the input items and to the parameters that the user set in the UI, including the credentials.

Add the following the `execute` method in the `FriendGrid.node.ts`:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>``` | ```<br>// Handle data coming from previous nodes<br>const items = this.getInputData();<br>let responseData;<br>const returnData = [];<br>const resource = this.getNodeParameter('resource', 0) as string;<br>const operation = this.getNodeParameter('operation', 0) as string;<br>// For each item, make an API call to create a contact<br>for (let i = 0; i < items.length; i++) {<br>	if (resource === 'contact') {<br>		if (operation === 'create') {<br>			// Get email input<br>			const email = this.getNodeParameter('email', i) as string;<br>			// Get additional fields input<br>			const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;<br>			const data: IDataObject = {<br>				email,<br>			};<br>			Object.assign(data, additionalFields);<br>			// Make HTTP request according to https://sendgrid.com/docs/api-reference/<br>			const options: OptionsWithUri = {<br>				headers: {<br>					'Accept': 'application/json',<br>				},<br>				method: 'PUT',<br>				body: {<br>					contacts: [<br>						data,<br>					],<br>				},<br>				uri: `https://api.sendgrid.com/v3/marketing/contacts`,<br>				json: true,<br>			};<br>			responseData = await this.helpers.requestWithAuthentication.call(this, 'friendGridApi', options);<br>			returnData.push(responseData);<br>		}<br>	}<br>}<br>// Map data to n8n data structure<br>return [this.helpers.returnJsonArray(returnData)];<br>``` |

Note the following lines of this code:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```<br>const items = this.getInputData();<br>... <br>for (let i = 0; i < items.length; i++) {<br>	...<br>	const email = this.getNodeParameter('email', i) as string;<br>	...<br>}<br>``` |

Users can provide data in two ways:

- Entered directly in the node fields
- By mapping data from earlier nodes in the workflow

`getInputData()`, and the subsequent loop, allows the node to handle situations where data comes from a previous node. This includes supporting multiple inputs. This means that if, for example, the previous node outputs contact information for five people, your FriendGrid node can create five contacts.

### Step 5: Set up authentication [\#](\#step-5-set-up-authentication "Permanent link")

The SendGrid API requires users to authenticate with an API key.

Add the following to `FriendGridApi.credentials.ts`

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>``` | ```<br>import {<br>	IAuthenticateGeneric,<br>	ICredentialTestRequest,<br>	ICredentialType,<br>	INodeProperties,<br>} from 'n8n-workflow';<br>export class FriendGridApi implements ICredentialType {<br>	name = 'friendGridApi';<br>	displayName = 'FriendGrid API';<br>	properties: INodeProperties[] = [<br>		{<br>			displayName: 'API Key',<br>			name: 'apiKey',<br>			type: 'string',<br>			default: '',<br>		},<br>	];<br>	authenticate: IAuthenticateGeneric = {<br>		type: 'generic',<br>		properties: {<br>			headers: {<br>				Authorization: '=Bearer {{$credentials.apiKey}}',<br>			},<br>		},<br>	};<br>	test: ICredentialTestRequest = {<br>		request: {<br>			baseURL: 'https://api.sendgrid.com/v3',<br>			url: '/marketing/contacts',<br>		},<br>	};<br>}<br>``` |

For more information about credentials files and options, refer to [Credentials file](../reference/credentials-files/).

### Step 6: Add node metadata [\#](\#step-6-add-node-metadata "Permanent link")

Metadata about your node goes in the JSON file at the root of your node. n8n refers to this as the codex file. In this example, the file is `FriendGrid.node.json`.

Add the following code to the JSON file:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>``` | ```<br>{<br>	"node": "n8n-nodes-base.FriendGrid",<br>	"nodeVersion": "1.0",<br>	"codexVersion": "1.0",<br>	"categories": [<br>		"Miscellaneous"<br>	],<br>	"resources": {<br>		"credentialDocumentation": [<br>			{<br>				"url": ""<br>			}<br>		],<br>		"primaryDocumentation": [<br>			{<br>				"url": ""<br>			}<br>		]<br>	}<br>}<br>``` |

For more information on these parameters, refer to [Node codex files](../reference/node-codex-files/).

### Step 7: Update the npm package details [\#](\#step-7-update-the-npm-package-details "Permanent link")

Your npm package details are in the `package.json` at the root of the project. It's essential to include the `n8n` object with links to the credentials and base node file. Update this file to include the following information:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>``` | ```<br>{<br>	// All node names must start with "n8n-nodes-"<br>	"name": "n8n-nodes-friendgrid",<br>	"version": "0.1.0",<br>	"description": "n8n node to create contacts in SendGrid",<br>	"keywords": [<br>		// This keyword is required for community nodes<br>		"n8n-community-node-package"<br>	],<br>	"license": "MIT",<br>	"homepage": "https://n8n.io",<br>	"author": {<br>		"name": "Test",<br>		"email": "[email protected]"<br>	},<br>	"repository": {<br>		"type": "git",<br>		// Change the git remote to your own repository<br>		// Add the new URL here<br>		"url": "git+<your-repo-url>"<br>	},<br>	"main": "index.js",<br>	"scripts": {<br>		// don't change<br>	},<br>	"files": [<br>		"dist"<br>	],<br>	// Link the credentials and node<br>	"n8n": {<br>		"n8nNodesApiVersion": 1,<br>		"credentials": [<br>			"dist/credentials/FriendGridApi.credentials.js"<br>		],<br>		"nodes": [<br>			"dist/nodes/FriendGrid/FriendGrid.node.js"<br>		]<br>	},<br>	"devDependencies": {<br>		// don't change<br>	},<br>	"peerDependencies": {<br>		// don't change<br>	}<br>}<br>``` |

You need to update the `package.json` to include your own information, such as your name and repository URL. For more information on npm `package.json` files, refer to [npm's package.json documentation](https://docs.npmjs.com/cli/v8/configuring-npm/package-json).

## Test your node [\#](\#test-your-node "Permanent link")

You can test your node as you build it by running it in a local n8n instance.

1. Install n8n using npm:

   |     |     |
   | --- | --- |
   | ```<br>1<br>``` | ```<br>npm install n8n -g<br>``` |

2. When you are ready to test your node, publish it locally:

   |     |     |
   | --- | --- |
   | ```<br>1<br>2<br>3<br>``` | ```<br># In your node directory<br>npm run build<br>npm link<br>``` |

3. Install the node into your local n8n instance:

   |     |     |
   | --- | --- |
   | ```<br>1<br>2<br>3<br>``` | ```<br># In the nodes directory within your n8n installation<br># node-package-name is the name from the package.json<br>npm link <node-package-name><br>``` |

   Check your directory

   Make sure you run `npm link <node-name>` in the nodes directory within your n8n installation. This can be:

- `~/.n8n/custom/`
- `~/.n8n/<your-custom-name>`: if your n8n installation set a different name using `N8N_CUSTOM_EXTENSIONS`.

4. Start n8n:

   |     |     |
   | --- | --- |
   | ```<br>1<br>``` | ```<br>n8n start<br>``` |

5. Open n8n in your browser. You should see your nodes when you search for them in the nodes panel.

   Node names

   Make sure you search using the node name, not the package name. For example, if your npm package name is `n8n-nodes-weather-nodes`, and the package contains nodes named `rain`, `sun`, `snow`, you should search for `rain`, not `weather-nodes`.

### Troubleshooting [\#](\#troubleshooting "Permanent link")

If there's no `custom` directory in `~/.n8n` local installation, you have to create `custom` directory manually and run `npm init`:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```<br># In ~/.n8n directory run<br>mkdir custom <br>cd custom <br>npm init<br>``` |

## Next steps [\#](\#next-steps "Permanent link")

- [Deploy your node](../../deploy/).
- View an example of a programmatic node: n8n's [Mattermost node](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Mattermost). This is an example of a more complex programmatic node structure.
- Learn about [node versioning](../reference/node-versioning/).
- Make sure you understand key concepts: [item linking](../../../../data/data-mapping/data-item-linking/item-linking-concepts/) and [data structures](../../../../data/data-structure/).

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Choose node file structure | n8n Docs Node file structure#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/node-file-structure.md "Edit this page")

# Node file structure [\#](\#node-file-structure "Permanent link")

Following best practices and standards in your node structure makes your node easier to maintain. It's helpful if other people need to work with the code.

The file and directory structure of your node depends on:

- Your node's complexity.
- Whether you use node versioning.
- How many nodes you include in the npm package.

n8n recommends using the [`n8n-node` tool](../../n8n-node/) to create the expected node file structure. You can customize the generated scaffolding as required to meet more complex needs.

## Required files and directories [\#](\#required-files-and-directories "Permanent link")

Your node must include:

- A `package.json` file at the root of the project. Every npm module requires this.
- A `nodes` directory, containing the code for your node:
  - This directory must contain the [base file](../node-base-files/), in the format `<node-name>.node.ts`. For example, `MyNode.node.ts`.
  - n8n recommends including a [codex file](../node-codex-files/), containing metadata for your node. The codex filename must match the node base filename. For example, given a node base file named `MyNode.node.ts`, the codex name is `MyNode.node.json`.
  - The `nodes` directory can contain other files and subdirectories, including directories for versions, and node code split across more than one file to create a modular structure.
- A `credentials` directory, containing your credentials code. This code lives in a single [credentials file](../credentials-files/). The filename format is `<node-name>.credentials.ts`. For example, `MyNode.credentials.ts`.

## Modular structure [\#](\#modular-structure "Permanent link")

You can choose whether to place all your node's functionality in one file, or split it out into a base file and other modules, which the base file then imports. Unless your node is very simple, it's a best practice to split it out.

A basic pattern is to separate out operations. Refer to the [HttpBin starter node](https://github.com/n8n-io/n8n-nodes-starter/tree/master/nodes/HttpBin) for an example of this.

For more complex nodes, n8n recommends a directory structure. Refer to the [Airtable node](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Airtable) or [Microsoft Outlook node](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Microsoft/Outlook) as examples.

- `actions`: a directory containing sub-directories that represent resources.
  - Each sub-directory should contain two types of files:
  - An index file with resource description (named either `<resourceName>.resource.ts` or `index.ts`)
  - Files for operations `<operationName>.operation.ts`. These files should have two exports: `description` of the operation and an `execute` function.
- `methods`: an optional directory dynamic parameters' functions.
- `transport`: a directory containing the communication implementation.

## Versioning [\#](\#versioning "Permanent link")

If your node has more than one version, and you're using full versioning, this makes the file structure more complex. You need a directory for each version, along with a base file that sets the default version. Refer to [Node versioning](../node-versioning/) for more information on working with versions, including types of versioning.

## Decide how many nodes to include in a package [\#](\#decide-how-many-nodes-to-include-in-a-package "Permanent link")

There are two possible setups when building a node:

- One node in one npm package.
- More than one node in a single npm package.

n8n supports both approaches. If you include more than one node, each node should have its own directory in the `nodes` directory.

## A best-practice example for programmatic nodes [\#](\#a-best-practice-example-for-programmatic-nodes "Permanent link")

n8n's built-in [Airtable node](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Airtable) implements a modular structure and versioning, following recommended patterns.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/node-file-structure.md "Edit this page")

# Node file structure [\#](\#node-file-structure "Permanent link")

Following best practices and standards in your node structure makes your node easier to maintain. It's helpful if other people need to work with the code.

The file and directory structure of your node depends on:

- Your node's complexity.
- Whether you use node versioning.
- How many nodes you include in the npm package.

n8n recommends using the [`n8n-node` tool](../../n8n-node/) to create the expected node file structure. You can customize the generated scaffolding as required to meet more complex needs.

## Required files and directories [\#](\#required-files-and-directories "Permanent link")

Your node must include:

- A `package.json` file at the root of the project. Every npm module requires this.
- A `nodes` directory, containing the code for your node:
  - This directory must contain the [base file](../node-base-files/), in the format `<node-name>.node.ts`. For example, `MyNode.node.ts`.
  - n8n recommends including a [codex file](../node-codex-files/), containing metadata for your node. The codex filename must match the node base filename. For example, given a node base file named `MyNode.node.ts`, the codex name is `MyNode.node.json`.
  - The `nodes` directory can contain other files and subdirectories, including directories for versions, and node code split across more than one file to create a modular structure.
- A `credentials` directory, containing your credentials code. This code lives in a single [credentials file](../credentials-files/). The filename format is `<node-name>.credentials.ts`. For example, `MyNode.credentials.ts`.

## Modular structure [\#](\#modular-structure "Permanent link")

You can choose whether to place all your node's functionality in one file, or split it out into a base file and other modules, which the base file then imports. Unless your node is very simple, it's a best practice to split it out.

A basic pattern is to separate out operations. Refer to the [HttpBin starter node](https://github.com/n8n-io/n8n-nodes-starter/tree/master/nodes/HttpBin) for an example of this.

For more complex nodes, n8n recommends a directory structure. Refer to the [Airtable node](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Airtable) or [Microsoft Outlook node](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Microsoft/Outlook) as examples.

- `actions`: a directory containing sub-directories that represent resources.
  - Each sub-directory should contain two types of files:
  - An index file with resource description (named either `<resourceName>.resource.ts` or `index.ts`)
  - Files for operations `<operationName>.operation.ts`. These files should have two exports: `description` of the operation and an `execute` function.
- `methods`: an optional directory dynamic parameters' functions.
- `transport`: a directory containing the communication implementation.

## Versioning [\#](\#versioning "Permanent link")

If your node has more than one version, and you're using full versioning, this makes the file structure more complex. You need a directory for each version, along with a base file that sets the default version. Refer to [Node versioning](../node-versioning/) for more information on working with versions, including types of versioning.

## Decide how many nodes to include in a package [\#](\#decide-how-many-nodes-to-include-in-a-package "Permanent link")

There are two possible setups when building a node:

- One node in one npm package.
- More than one node in a single npm package.

n8n supports both approaches. If you include more than one node, each node should have its own directory in the `nodes` directory.

## A best-practice example for programmatic nodes [\#](\#a-best-practice-example-for-programmatic-nodes "Permanent link")

n8n's built-in [Airtable node](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Airtable) implements a modular structure and versioning, following recommended patterns.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Node UI elements | n8n Docs Node user interface elements#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/ui-elements.md "Edit this page")

# Node user interface elements [\#](\#node-user-interface-elements "Permanent link")

n8n provides a set of predefined UI components (based on a JSON file) that allows users to input all sorts of data types. The following UI elements are available in n8n.

## String [\#](\#string "Permanent link")

Basic configuration:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>``` | ```<br>{<br>	displayName: Name, // The value the user sees in the UI<br>	name: name, // The name used to reference the element UI within the code<br>	type: string,<br>	required: true, // Whether the field is required or not<br>	default: 'n8n',<br>	description: 'The name of the user',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![String](../../../../../_images/integrations/creating-nodes/string.png)

String field for inputting passwords:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>``` | ```<br>{<br>	displayName: 'Password',<br>	name: 'password',<br>	type: 'string',<br>	required: true,<br>	typeOptions: {<br>		password: true,<br>	},<br>	default: '',<br>	description: `User's password`,<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Password](../../../../../_images/integrations/creating-nodes/password.png)

String field with more than one row:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>``` | ```<br>{<br>	displayName: 'Description',<br>	name: 'description',<br>	type: 'string',<br>	required: true,<br>	typeOptions: {<br>		rows: 4,<br>	},<br>	default: '',<br>	description: 'Description',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Multiple rows](../../../../../_images/integrations/creating-nodes/multiple-rows.png)

### Support drag and drop for data keys [\#](\#support-drag-and-drop-for-data-keys "Permanent link")

Users can drag and drop data values to map them to fields. Dragging and dropping creates an [expression](../../../../../glossary/#expression-n8n) to load the data value. n8n supports this automatically.

You need to add an extra configuration option to support dragging and dropping data keys:

- `requiresDataPath: 'single'`: for fields that require a single string.
- `requiresDataPath: 'multiple'`: for fields that can accept a comma-separated list of string.

The [Compare Datasets node code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/CompareDatasets/CompareDatasets.node.ts) has examples.

## Number [\#](\#number "Permanent link")

Number field with decimal points:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>``` | ```<br>{<br>	displayName: 'Amount',<br>	name: 'amount',<br>	type: 'number',<br>	required: true,<br>	typeOptions: {<br>		maxValue: 10,<br>		minValue: 0,<br>		numberPrecision: 2,<br>	},<br>	default: 10.00,<br>	description: 'Your current amount',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Decimal](../../../../../_images/integrations/creating-nodes/decimal.png)

## Collection [\#](\#collection "Permanent link")

Use the `collection` type when you need to display optional fields.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>``` | ```<br>{<br>	displayName: 'Filters',<br>	name: 'filters',<br>	type: 'collection',<br>	placeholder: 'Add Field',<br>	default: {},<br>	options: [<br>		{<br>			displayName: 'Type',<br>			name: 'type',<br>			type: 'options',<br>			options: [<br>				{<br>					name: 'Automated',<br>					value: 'automated',<br>				},<br>				{<br>					name: 'Past',<br>					value: 'past',<br>				},<br>				{<br>					name: 'Upcoming',<br>					value: 'upcoming',<br>				},<br>			],<br>			default: '',<br>		},<br>	],<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Collection](../../../../../_images/integrations/creating-nodes/collection.png)

## DateTime [\#](\#datetime "Permanent link")

The `dateTime` type provides a date picker.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>``` | ```<br>{<br>	displayName: 'Modified Since',<br>	name: 'modified_since',<br>	type: 'dateTime',<br>	default: '',<br>	description: 'The date and time when the file was last modified',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![DateTime](../../../../../_images/integrations/creating-nodes/datetime.png)

## Boolean [\#](\#boolean "Permanent link")

The `boolean` type adds a toggle for entering true or false.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>``` | ```<br>{<br>	displayName: 'Wait for Image',<br>	name: 'waitForImage',<br>	type: 'boolean',<br>	default: true, // Initial state of the toggle<br>	description: 'Whether to wait for the image or not',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Boolean](../../../../../_images/integrations/creating-nodes/boolean.png)

## Color [\#](\#color "Permanent link")

The `color` type provides a color selector.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>``` | ```<br>{<br>	displayName: 'Background Color',<br>	name: 'backgroundColor',<br>	type: 'color',<br>	default: '', // Initially selected color<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Color](../../../../../_images/integrations/creating-nodes/color.png)

## Options [\#](\#options "Permanent link")

The `options` type adds an options list. Users can select a single value.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>``` | ```<br>{<br>	displayName: 'Resource',<br>	name: 'resource',<br>	type: 'options',<br>	options: [<br>		{<br>			name: 'Image',<br>			value: 'image',<br>		},<br>		{<br>			name: 'Template',<br>			value: 'template',<br>		},<br>	],<br>	default: 'image', // The initially selected option<br>	description: 'Resource to consume',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Options](../../../../../_images/integrations/creating-nodes/options.png)

## Multi-options [\#](\#multi-options "Permanent link")

The `multiOptions` type adds an options list. Users can select more than one value.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>``` | ```<br>{<br>	displayName: 'Events',<br>	name: 'events',<br>	type: 'multiOptions',<br>	options: [<br>		{<br>			name: 'Plan Created',<br>			value: 'planCreated',<br>		},<br>		{<br>			name: 'Plan Deleted',<br>			value: 'planDeleted',<br>		},<br>	],<br>	default: [], // Initially selected options<br>	description: 'The events to be monitored',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Multi-options](../../../../../_images/integrations/creating-nodes/multioptions.png)

## Filter [\#](\#filter "Permanent link")

Use this component to evaluate, match, or filter incoming data.

This is the code from n8n's own If node. It shows a filter component working with a [collection](#collection) component where users can configure the filter's behavior.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>``` | ```<br>{<br>	displayName: 'Conditions',<br>	name: 'conditions',<br>	placeholder: 'Add Condition',<br>	type: 'filter',<br>	default: {},<br>	typeOptions: {<br>		filter: {<br>			// Use the user options (below) to determine filter behavior<br>			caseSensitive: '={{!$parameter.options.ignoreCase}}',<br>			typeValidation: '={{$parameter.options.looseTypeValidation ? "loose" : "strict"}}',<br>		},<br>	},<br>},<br>{<br>displayName: 'Options',<br>name: 'options',<br>type: 'collection',<br>placeholder: 'Add option',<br>default: {},<br>options: [<br>	{<br>		displayName: 'Ignore Case',<br>		description: 'Whether to ignore letter case when evaluating conditions',<br>		name: 'ignoreCase',<br>		type: 'boolean',<br>		default: true,<br>	},<br>	{<br>		displayName: 'Less Strict Type Validation',<br>		description: 'Whether to try casting value types based on the selected operator',<br>		name: 'looseTypeValidation',<br>		type: 'boolean',<br>		default: true,<br>	},<br>],<br>},<br>``` |

![Filter](../../../../../_images/integrations/creating-nodes/filter.png)

## Assignment collection (drag and drop) [\#](\#assignment-collection-drag-and-drop "Permanent link")

Use the drag and drop component when you want users to pre-fill name and value parameters with a single drag interaction.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```<br>{<br>	displayName: 'Fields to Set',<br>	name: 'assignments',<br>	type: 'assignmentCollection',<br>	default: {},<br>},<br>``` |

You can see an example in n8n's [Edit Fields (Set) node](https://github.com/n8n-io/n8n/tree/0faeab1228e26d69a2a93bdb2f89523cca1e4036/packages/nodes-base/nodes/Set/v2):

![A gif showing the drag and drop action, as well as changing a field to fixed](../../../../../_images/integrations/builtin/core-nodes/set/drag-drop-fixed-toggle.gif)

## Fixed collection [\#](\#fixed-collection "Permanent link")

Use the `fixedCollection` type to group fields that are semantically related.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>``` | ```<br>{<br>	displayName: 'Metadata',<br>	name: 'metadataUi',<br>	placeholder: 'Add Metadata',<br>	type: 'fixedCollection',<br>	default: '',<br>	typeOptions: {<br>		multipleValues: true,<br>	},<br>	description: '',<br>	options: [<br>		{<br>			name: 'metadataValues',<br>			displayName: 'Metadata',<br>			values: [<br>				{<br>					displayName: 'Name',<br>					name: 'name',<br>					type: 'string',<br>					default: 'Name of the metadata key to add.',<br>				},<br>				{<br>					displayName: 'Value',<br>					name: 'value',<br>					type: 'string',<br>					default: '',<br>					description: 'Value to set for the metadata key.',<br>				},<br>			],<br>		},<br>	],<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Fixed collection](../../../../../_images/integrations/creating-nodes/fixed-collection.png)

## Resource locator [\#](\#resource-locator "Permanent link")

![Resource locator](../../../../../_images/integrations/creating-nodes/resource-locator.png)

The resource locator element helps users find a specific resource in an external service, such as a card or label in Trello.

The following options are available:

- ID
- URL
- List: allows users to select or search from a prepopulated list. This option requires more coding, as you must populate the list, and handle searching if you choose to support it.

You can choose which types to include.

Example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>75<br>76<br>``` | ```<br>{<br>	displayName: 'Card',<br>	name: 'cardID',<br>	type: 'resourceLocator',<br>	default: '',<br>	description: 'Get a card',<br>	modes: [<br>		{<br>			displayName: 'ID',<br>			name: 'id',<br>			type: 'string',<br>			hint: 'Enter an ID',<br>			validation: [<br>				{<br>					type: 'regex',<br>					properties: {<br>						regex: '^[0-9]',<br>						errorMessage: 'The ID must start with a number',<br>					},<br>				},<br>			],<br>			placeholder: '12example',<br>			// How to use the ID in API call<br>			url: '=http://api-base-url.com/?id={{$value}}',<br>		},<br>		{<br>			displayName: 'URL',<br>			name: 'url',<br>			type: 'string',<br>			hint: 'Enter a URL',<br>			validation: [<br>				{<br>					type: 'regex',<br>					properties: {<br>						regex: '^http',<br>						errorMessage: 'Invalid URL',<br>					},<br>				},<br>			],<br>			placeholder: 'https://example.com/card/12example/',<br>			// How to get the ID from the URL<br>			extractValue: {<br>				type: 'regex',<br>				regex: 'example.com/card/([0-9]*.*)/',<br>			},<br>		},<br>		{<br>			displayName: 'List',<br>			name: 'list',<br>			type: 'list',<br>			typeOptions: {<br>				// You must always provide a search method<br>				// Write this method within the methods object in your base file<br>				// The method must populate the list, and handle searching if searchable: true<br>				searchListMethod: 'searchMethod',<br>				// If you want users to be able to search the list<br>				searchable: true,<br>				// Set to true if you want to force users to search<br>				// When true, users can't browse the list<br>				// Or false if users can browse a list<br>				searchFilterRequired: true,<br>			},<br>		},<br>	],<br>	displayOptions: {<br>		// the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			],<br>		},<br>	},<br>},<br>``` |

Refer to the following for live examples:

- Refer to [`CardDescription.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Trello/CardDescription.ts) and [`Trello.node.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Trello/Trello.node.ts) in n8n's Trello node for an example of a list with search that includes `searchFilterRequired: true`.
- Refer to [`GoogleDrive.node.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Drive/GoogleDrive.node.ts) for an example where users can browse the list or search.

## Resource mapper [\#](\#resource-mapper "Permanent link")

If your node performs insert, update, or upsert operations, you need to send data from the node in a format supported by the service you're integrating with. A common pattern is to use a Set node before the node that sends data, to convert the data to match the schema of the service you're connecting to. The resource mapper UI component provides a way to get data into the required format directly within the node, rather than using a Set node. The resource mapper component can also validate input data against the schema provided in the node, and cast input data into the expected type.

Mapping and matching

Mapping is the process of setting the input data to use as values when updating row(s). Matching is the process of using column names to identify the row(s) to update.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>``` | ```<br>{<br>	displayName: 'Columns',<br>	name: 'columns', // The name used to reference the element UI within the code<br>	type: 'resourceMapper', // The UI element type<br>	default: {<br>		// mappingMode can be defined in the component (mappingMode: 'defineBelow')<br>		// or you can attempt automatic mapping (mappingMode: 'autoMapInputData')<br>		mappingMode: 'defineBelow',<br>		// Important: always set default value to null<br>		value: null,<br>	},<br>	required: true,<br>	// See "Resource mapper type options interface" below for the full typeOptions specification<br>	typeOptions: {<br>		resourceMapper: {<br>			resourceMapperMethod: 'getMappingColumns',<br>			mode: 'update',<br>			fieldWords: {<br>				singular: 'column',<br>				plural: 'columns',<br>			},<br>			addAllFields: true, <br>			multiKeyMatch: true,<br>			supportAutoMap: true,<br>			matchingFieldsLabels: {<br>				title: 'Custom matching columns title',<br>				description: 'Help text for custom matching columns',<br>				hint: 'Below-field hint for custom matching columns',<br>			},<br>		},<br>	},<br>},<br>``` |

Refer to the [Postgres node (version 2)](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Postgres/v2) for a live example using a database schema.

Refer to the [Google Sheets node (version 2)](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Google/Sheet/v2) for a live example using a schema-less service.

### Resource mapper type options interface [\#](\#resource-mapper-type-options-interface "Permanent link")

The `typeOptions` section must implement the following interface:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>``` | ```<br>export interface ResourceMapperTypeOptions {<br>	// The name of the method where you fetch the schema<br>	// Refer to the Resource mapper method section for more detail<br>	resourceMapperMethod: string;<br>	// Choose the mode for your operation<br>	// Supported modes: add, update, upsert<br>	mode: 'add' | 'update' | 'upsert';<br>	// Specify labels for fields in the UI<br>	fieldWords?: { singular: string; plural: string };<br>	// Whether n8n should display a UI input for every field when node first added to workflow<br>	// Default is true<br>	addAllFields?: boolean;<br>	// Specify a message to show if no fields are fetched from the service <br>	// (the call is successful but the response is empty)<br>	noFieldsError?: string;<br>	// Whether to support multi-key column matching<br>	// multiKeyMatch is for update and upsert only<br>	// Default is false<br>	// If true, the node displays a multi-select dropdown for the matching column selector<br>	multiKeyMatch?: boolean;<br>	// Whether to support automatic mapping<br>	// If false, n8n hides the mapping mode selector field and sets mappingMode to defineBelow<br>	supportAutoMap?: boolean;<br>	// Custom labels for the matching columns selector<br>	matchingFieldsLabels?: {<br>		title?: string;<br>		description?: string;<br>		hint?: string;<br>	};<br>}<br>``` |

### Resource mapper method [\#](\#resource-mapper-method "Permanent link")

This method contains your node-specific logic for fetching the data schema. Every node must implement its own logic for fetching the schema, and setting up each UI field according to the schema.

It must return a value that implements the `ResourceMapperFields` interface:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>``` | ```<br>interface ResourceMapperField {<br>	// Field ID as in the service<br>	id: string;<br>	// Field label<br>	displayName: string;<br>	// Whether n8n should pre-select the field as a matching field<br>	// A matching field is a column used to identify the rows to modify<br>	defaultMatch: boolean;<br>	// Whether the field can be used as a matching field<br>	canBeUsedToMatch?: boolean;<br>	// Whether the field is required by the schema<br>	required: boolean;<br>	// Whether to display the field in the UI<br>	// If false, can't be used for matching or mapping<br>	display: boolean;<br>	// The data type for the field<br>	// These correspond to UI element types<br>	// Supported types: string, number, dateTime, boolean, time, array, object, options<br>	type?: FieldType;<br>	// Added at runtime if the field is removed from mapping by the user<br>	removed?: boolean;<br>	// Specify options for enumerated types<br>	options?: INodePropertyOptions[];<br>}<br>``` |

Refer to the [Postgres resource mapping method](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Postgres/v2/methods/resourceMapping.ts) and [Google Sheets resource mapping method](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Sheet/v2/methods/resourceMapping.ts) for live examples.

## JSON [\#](\#json "Permanent link")

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>``` | ```<br>{<br>	displayName: 'Content (JSON)',<br>	name: 'content',<br>	type: 'json',<br>	default: '',<br>	description: '',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![JSON](../../../../../_images/integrations/creating-nodes/json.png)

## HTML [\#](\#html "Permanent link")

The HTML editor allows users to create HTML templates in their workflows. The editor supports standard HTML, CSS in `<style>` tags, and expressions wrapped in `{{}}`. Users can add `<script>` tags to pull in additional JavaScript. n8n doesn't run this JavaScript during workflow execution.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```<br>{<br>	displayName: 'HTML Template', // The value the user sees in the UI<br>	name: 'html', // The name used to reference the element UI within the code<br>	type: 'string',<br>	typeOptions: {<br>		editor: 'htmlEditor',<br>	},<br>	default: placeholder, // Loads n8n's placeholder HTML template<br>	noDataExpression: true, // Prevent using an expression for the field<br>	description: 'HTML template to render',<br>},<br>``` |

Refer to [`Html.node.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Html/Html.node.ts) for a live example.

## Notice [\#](\#notice "Permanent link")

Display a yellow box with a hint or extra info. Refer to [Node UI design](../../../plan/node-ui-design/) for guidance on writing good hints and info text.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```<br>{<br>  displayName: 'Your text here',<br>  name: 'notice',<br>  type: 'notice',<br>  default: '',<br>},<br>``` |

![Notice](../../../../../_images/integrations/creating-nodes/notice.png)

## Hints [\#](\#hints "Permanent link")

There are two types of hints: parameter hints and node hints:

- Parameter hints are small lines of text below a user input field.
- Node hints are a more powerful and flexible option than [Notice](#notice). Use them to display longer hints, in the input panel, output panel, or node details view.

### Add a parameter hint [\#](\#add-a-parameter-hint "Permanent link")

Add the `hint` parameter to a UI element:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```<br>{<br>	displayName: 'URL',<br>	name: 'url',<br>	type: 'string',<br>	hint: 'Enter a URL',<br>	...<br>}<br>``` |

### Add a node hint [\#](\#add-a-node-hint "Permanent link")

Define the node's hints in the `hints` property within the node `description`:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>``` | ```<br>description: INodeTypeDescription = {<br>	...<br>	hints: [<br>		{<br>			// The hint message. You can use HTML.<br>			message: "This node has many input items. Consider enabling <b>Execute Once</b> in the node\'s settings.",<br>			// Choose from: info, warning, danger. The default is 'info'.<br>			// Changes the color. info (grey), warning (yellow), danger (red)<br>			type: 'info',<br>			// Choose from: inputPane, outputPane, ndv. By default n8n displays the hint in both the input and output panels.<br>			location: 'outputPane',<br>			// Choose from: always, beforeExecution, afterExecution. The default is 'always'<br>			whenToDisplay: 'beforeExecution',<br>			// Optional. An expression. If it resolves to true, n8n displays the message. Defaults to true.<br>			displayCondition: '={{ $parameter["operation"] === "select" && $input.all().length > 1 }}'<br>		}<br>	]<br>	...<br>}<br>``` |

### Add a dynamic hint to a programmatic-style node [\#](\#add-a-dynamic-hint-to-a-programmatic-style-node "Permanent link")

In programmatic-style nodes you can create a dynamic message that includes information from the node execution. As it relies on the node output data, you can't display this type of hint until after execution.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>``` | ```<br>if (operation === 'select' && items.length > 1 && !node.executeOnce) {<br>    // Expects two parameters: NodeExecutionData and an array of hints<br>	return new NodeExecutionOutput(<br>		[returnData],<br>		[<br>			{<br>				message: `This node ran ${items.length} times, once for each input item. To run for the first item only, enable <b>Execute once</b> in the node settings.`,<br>				location: 'outputPane',<br>			},<br>		],<br>	);<br>}<br>return [returnData];<br>``` |

For a live example of a dynamic hint in a programmatic-style node, view the [Split Out node code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Transform/SplitOut/SplitOut.node.ts#L266).

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/ui-elements.md "Edit this page")

# Node user interface elements [\#](\#node-user-interface-elements "Permanent link")

n8n provides a set of predefined UI components (based on a JSON file) that allows users to input all sorts of data types. The following UI elements are available in n8n.

## String [\#](\#string "Permanent link")

Basic configuration:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>``` | ```<br>{<br>	displayName: Name, // The value the user sees in the UI<br>	name: name, // The name used to reference the element UI within the code<br>	type: string,<br>	required: true, // Whether the field is required or not<br>	default: 'n8n',<br>	description: 'The name of the user',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![String](../../../../../_images/integrations/creating-nodes/string.png)

String field for inputting passwords:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>``` | ```<br>{<br>	displayName: 'Password',<br>	name: 'password',<br>	type: 'string',<br>	required: true,<br>	typeOptions: {<br>		password: true,<br>	},<br>	default: '',<br>	description: `User's password`,<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Password](../../../../../_images/integrations/creating-nodes/password.png)

String field with more than one row:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>``` | ```<br>{<br>	displayName: 'Description',<br>	name: 'description',<br>	type: 'string',<br>	required: true,<br>	typeOptions: {<br>		rows: 4,<br>	},<br>	default: '',<br>	description: 'Description',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Multiple rows](../../../../../_images/integrations/creating-nodes/multiple-rows.png)

### Support drag and drop for data keys [\#](\#support-drag-and-drop-for-data-keys "Permanent link")

Users can drag and drop data values to map them to fields. Dragging and dropping creates an [expression](../../../../../glossary/#expression-n8n) to load the data value. n8n supports this automatically.

You need to add an extra configuration option to support dragging and dropping data keys:

- `requiresDataPath: 'single'`: for fields that require a single string.
- `requiresDataPath: 'multiple'`: for fields that can accept a comma-separated list of string.

The [Compare Datasets node code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/CompareDatasets/CompareDatasets.node.ts) has examples.

## Number [\#](\#number "Permanent link")

Number field with decimal points:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>``` | ```<br>{<br>	displayName: 'Amount',<br>	name: 'amount',<br>	type: 'number',<br>	required: true,<br>	typeOptions: {<br>		maxValue: 10,<br>		minValue: 0,<br>		numberPrecision: 2,<br>	},<br>	default: 10.00,<br>	description: 'Your current amount',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Decimal](../../../../../_images/integrations/creating-nodes/decimal.png)

## Collection [\#](\#collection "Permanent link")

Use the `collection` type when you need to display optional fields.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>``` | ```<br>{<br>	displayName: 'Filters',<br>	name: 'filters',<br>	type: 'collection',<br>	placeholder: 'Add Field',<br>	default: {},<br>	options: [<br>		{<br>			displayName: 'Type',<br>			name: 'type',<br>			type: 'options',<br>			options: [<br>				{<br>					name: 'Automated',<br>					value: 'automated',<br>				},<br>				{<br>					name: 'Past',<br>					value: 'past',<br>				},<br>				{<br>					name: 'Upcoming',<br>					value: 'upcoming',<br>				},<br>			],<br>			default: '',<br>		},<br>	],<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Collection](../../../../../_images/integrations/creating-nodes/collection.png)

## DateTime [\#](\#datetime "Permanent link")

The `dateTime` type provides a date picker.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>``` | ```<br>{<br>	displayName: 'Modified Since',<br>	name: 'modified_since',<br>	type: 'dateTime',<br>	default: '',<br>	description: 'The date and time when the file was last modified',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![DateTime](../../../../../_images/integrations/creating-nodes/datetime.png)

## Boolean [\#](\#boolean "Permanent link")

The `boolean` type adds a toggle for entering true or false.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>``` | ```<br>{<br>	displayName: 'Wait for Image',<br>	name: 'waitForImage',<br>	type: 'boolean',<br>	default: true, // Initial state of the toggle<br>	description: 'Whether to wait for the image or not',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Boolean](../../../../../_images/integrations/creating-nodes/boolean.png)

## Color [\#](\#color "Permanent link")

The `color` type provides a color selector.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>``` | ```<br>{<br>	displayName: 'Background Color',<br>	name: 'backgroundColor',<br>	type: 'color',<br>	default: '', // Initially selected color<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Color](../../../../../_images/integrations/creating-nodes/color.png)

## Options [\#](\#options "Permanent link")

The `options` type adds an options list. Users can select a single value.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>``` | ```<br>{<br>	displayName: 'Resource',<br>	name: 'resource',<br>	type: 'options',<br>	options: [<br>		{<br>			name: 'Image',<br>			value: 'image',<br>		},<br>		{<br>			name: 'Template',<br>			value: 'template',<br>		},<br>	],<br>	default: 'image', // The initially selected option<br>	description: 'Resource to consume',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Options](../../../../../_images/integrations/creating-nodes/options.png)

## Multi-options [\#](\#multi-options "Permanent link")

The `multiOptions` type adds an options list. Users can select more than one value.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>``` | ```<br>{<br>	displayName: 'Events',<br>	name: 'events',<br>	type: 'multiOptions',<br>	options: [<br>		{<br>			name: 'Plan Created',<br>			value: 'planCreated',<br>		},<br>		{<br>			name: 'Plan Deleted',<br>			value: 'planDeleted',<br>		},<br>	],<br>	default: [], // Initially selected options<br>	description: 'The events to be monitored',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Multi-options](../../../../../_images/integrations/creating-nodes/multioptions.png)

## Filter [\#](\#filter "Permanent link")

Use this component to evaluate, match, or filter incoming data.

This is the code from n8n's own If node. It shows a filter component working with a [collection](#collection) component where users can configure the filter's behavior.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>``` | ```<br>{<br>	displayName: 'Conditions',<br>	name: 'conditions',<br>	placeholder: 'Add Condition',<br>	type: 'filter',<br>	default: {},<br>	typeOptions: {<br>		filter: {<br>			// Use the user options (below) to determine filter behavior<br>			caseSensitive: '={{!$parameter.options.ignoreCase}}',<br>			typeValidation: '={{$parameter.options.looseTypeValidation ? "loose" : "strict"}}',<br>		},<br>	},<br>},<br>{<br>displayName: 'Options',<br>name: 'options',<br>type: 'collection',<br>placeholder: 'Add option',<br>default: {},<br>options: [<br>	{<br>		displayName: 'Ignore Case',<br>		description: 'Whether to ignore letter case when evaluating conditions',<br>		name: 'ignoreCase',<br>		type: 'boolean',<br>		default: true,<br>	},<br>	{<br>		displayName: 'Less Strict Type Validation',<br>		description: 'Whether to try casting value types based on the selected operator',<br>		name: 'looseTypeValidation',<br>		type: 'boolean',<br>		default: true,<br>	},<br>],<br>},<br>``` |

![Filter](../../../../../_images/integrations/creating-nodes/filter.png)

## Assignment collection (drag and drop) [\#](\#assignment-collection-drag-and-drop "Permanent link")

Use the drag and drop component when you want users to pre-fill name and value parameters with a single drag interaction.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```<br>{<br>	displayName: 'Fields to Set',<br>	name: 'assignments',<br>	type: 'assignmentCollection',<br>	default: {},<br>},<br>``` |

You can see an example in n8n's [Edit Fields (Set) node](https://github.com/n8n-io/n8n/tree/0faeab1228e26d69a2a93bdb2f89523cca1e4036/packages/nodes-base/nodes/Set/v2):

![A gif showing the drag and drop action, as well as changing a field to fixed](../../../../../_images/integrations/builtin/core-nodes/set/drag-drop-fixed-toggle.gif)

## Fixed collection [\#](\#fixed-collection "Permanent link")

Use the `fixedCollection` type to group fields that are semantically related.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>``` | ```<br>{<br>	displayName: 'Metadata',<br>	name: 'metadataUi',<br>	placeholder: 'Add Metadata',<br>	type: 'fixedCollection',<br>	default: '',<br>	typeOptions: {<br>		multipleValues: true,<br>	},<br>	description: '',<br>	options: [<br>		{<br>			name: 'metadataValues',<br>			displayName: 'Metadata',<br>			values: [<br>				{<br>					displayName: 'Name',<br>					name: 'name',<br>					type: 'string',<br>					default: 'Name of the metadata key to add.',<br>				},<br>				{<br>					displayName: 'Value',<br>					name: 'value',<br>					type: 'string',<br>					default: '',<br>					description: 'Value to set for the metadata key.',<br>				},<br>			],<br>		},<br>	],<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![Fixed collection](../../../../../_images/integrations/creating-nodes/fixed-collection.png)

## Resource locator [\#](\#resource-locator "Permanent link")

![Resource locator](../../../../../_images/integrations/creating-nodes/resource-locator.png)

The resource locator element helps users find a specific resource in an external service, such as a card or label in Trello.

The following options are available:

- ID
- URL
- List: allows users to select or search from a prepopulated list. This option requires more coding, as you must populate the list, and handle searching if you choose to support it.

You can choose which types to include.

Example:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>69<br>70<br>71<br>72<br>73<br>74<br>75<br>76<br>``` | ```<br>{<br>	displayName: 'Card',<br>	name: 'cardID',<br>	type: 'resourceLocator',<br>	default: '',<br>	description: 'Get a card',<br>	modes: [<br>		{<br>			displayName: 'ID',<br>			name: 'id',<br>			type: 'string',<br>			hint: 'Enter an ID',<br>			validation: [<br>				{<br>					type: 'regex',<br>					properties: {<br>						regex: '^[0-9]',<br>						errorMessage: 'The ID must start with a number',<br>					},<br>				},<br>			],<br>			placeholder: '12example',<br>			// How to use the ID in API call<br>			url: '=http://api-base-url.com/?id={{$value}}',<br>		},<br>		{<br>			displayName: 'URL',<br>			name: 'url',<br>			type: 'string',<br>			hint: 'Enter a URL',<br>			validation: [<br>				{<br>					type: 'regex',<br>					properties: {<br>						regex: '^http',<br>						errorMessage: 'Invalid URL',<br>					},<br>				},<br>			],<br>			placeholder: 'https://example.com/card/12example/',<br>			// How to get the ID from the URL<br>			extractValue: {<br>				type: 'regex',<br>				regex: 'example.com/card/([0-9]*.*)/',<br>			},<br>		},<br>		{<br>			displayName: 'List',<br>			name: 'list',<br>			type: 'list',<br>			typeOptions: {<br>				// You must always provide a search method<br>				// Write this method within the methods object in your base file<br>				// The method must populate the list, and handle searching if searchable: true<br>				searchListMethod: 'searchMethod',<br>				// If you want users to be able to search the list<br>				searchable: true,<br>				// Set to true if you want to force users to search<br>				// When true, users can't browse the list<br>				// Or false if users can browse a list<br>				searchFilterRequired: true,<br>			},<br>		},<br>	],<br>	displayOptions: {<br>		// the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			],<br>		},<br>	},<br>},<br>``` |

Refer to the following for live examples:

- Refer to [`CardDescription.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Trello/CardDescription.ts) and [`Trello.node.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Trello/Trello.node.ts) in n8n's Trello node for an example of a list with search that includes `searchFilterRequired: true`.
- Refer to [`GoogleDrive.node.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Drive/GoogleDrive.node.ts) for an example where users can browse the list or search.

## Resource mapper [\#](\#resource-mapper "Permanent link")

If your node performs insert, update, or upsert operations, you need to send data from the node in a format supported by the service you're integrating with. A common pattern is to use a Set node before the node that sends data, to convert the data to match the schema of the service you're connecting to. The resource mapper UI component provides a way to get data into the required format directly within the node, rather than using a Set node. The resource mapper component can also validate input data against the schema provided in the node, and cast input data into the expected type.

Mapping and matching

Mapping is the process of setting the input data to use as values when updating row(s). Matching is the process of using column names to identify the row(s) to update.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>``` | ```<br>{<br>	displayName: 'Columns',<br>	name: 'columns', // The name used to reference the element UI within the code<br>	type: 'resourceMapper', // The UI element type<br>	default: {<br>		// mappingMode can be defined in the component (mappingMode: 'defineBelow')<br>		// or you can attempt automatic mapping (mappingMode: 'autoMapInputData')<br>		mappingMode: 'defineBelow',<br>		// Important: always set default value to null<br>		value: null,<br>	},<br>	required: true,<br>	// See "Resource mapper type options interface" below for the full typeOptions specification<br>	typeOptions: {<br>		resourceMapper: {<br>			resourceMapperMethod: 'getMappingColumns',<br>			mode: 'update',<br>			fieldWords: {<br>				singular: 'column',<br>				plural: 'columns',<br>			},<br>			addAllFields: true, <br>			multiKeyMatch: true,<br>			supportAutoMap: true,<br>			matchingFieldsLabels: {<br>				title: 'Custom matching columns title',<br>				description: 'Help text for custom matching columns',<br>				hint: 'Below-field hint for custom matching columns',<br>			},<br>		},<br>	},<br>},<br>``` |

Refer to the [Postgres node (version 2)](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Postgres/v2) for a live example using a database schema.

Refer to the [Google Sheets node (version 2)](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Google/Sheet/v2) for a live example using a schema-less service.

### Resource mapper type options interface [\#](\#resource-mapper-type-options-interface "Permanent link")

The `typeOptions` section must implement the following interface:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>``` | ```<br>export interface ResourceMapperTypeOptions {<br>	// The name of the method where you fetch the schema<br>	// Refer to the Resource mapper method section for more detail<br>	resourceMapperMethod: string;<br>	// Choose the mode for your operation<br>	// Supported modes: add, update, upsert<br>	mode: 'add' | 'update' | 'upsert';<br>	// Specify labels for fields in the UI<br>	fieldWords?: { singular: string; plural: string };<br>	// Whether n8n should display a UI input for every field when node first added to workflow<br>	// Default is true<br>	addAllFields?: boolean;<br>	// Specify a message to show if no fields are fetched from the service <br>	// (the call is successful but the response is empty)<br>	noFieldsError?: string;<br>	// Whether to support multi-key column matching<br>	// multiKeyMatch is for update and upsert only<br>	// Default is false<br>	// If true, the node displays a multi-select dropdown for the matching column selector<br>	multiKeyMatch?: boolean;<br>	// Whether to support automatic mapping<br>	// If false, n8n hides the mapping mode selector field and sets mappingMode to defineBelow<br>	supportAutoMap?: boolean;<br>	// Custom labels for the matching columns selector<br>	matchingFieldsLabels?: {<br>		title?: string;<br>		description?: string;<br>		hint?: string;<br>	};<br>}<br>``` |

### Resource mapper method [\#](\#resource-mapper-method "Permanent link")

This method contains your node-specific logic for fetching the data schema. Every node must implement its own logic for fetching the schema, and setting up each UI field according to the schema.

It must return a value that implements the `ResourceMapperFields` interface:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>``` | ```<br>interface ResourceMapperField {<br>	// Field ID as in the service<br>	id: string;<br>	// Field label<br>	displayName: string;<br>	// Whether n8n should pre-select the field as a matching field<br>	// A matching field is a column used to identify the rows to modify<br>	defaultMatch: boolean;<br>	// Whether the field can be used as a matching field<br>	canBeUsedToMatch?: boolean;<br>	// Whether the field is required by the schema<br>	required: boolean;<br>	// Whether to display the field in the UI<br>	// If false, can't be used for matching or mapping<br>	display: boolean;<br>	// The data type for the field<br>	// These correspond to UI element types<br>	// Supported types: string, number, dateTime, boolean, time, array, object, options<br>	type?: FieldType;<br>	// Added at runtime if the field is removed from mapping by the user<br>	removed?: boolean;<br>	// Specify options for enumerated types<br>	options?: INodePropertyOptions[];<br>}<br>``` |

Refer to the [Postgres resource mapping method](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Postgres/v2/methods/resourceMapping.ts) and [Google Sheets resource mapping method](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Google/Sheet/v2/methods/resourceMapping.ts) for live examples.

## JSON [\#](\#json "Permanent link")

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>``` | ```<br>{<br>	displayName: 'Content (JSON)',<br>	name: 'content',<br>	type: 'json',<br>	default: '',<br>	description: '',<br>	displayOptions: { // the resources and operations to display this element with<br>		show: {<br>			resource: [<br>				// comma-separated list of resource names<br>			],<br>			operation: [<br>				// comma-separated list of operation names<br>			]<br>		}<br>	},<br>}<br>``` |

![JSON](../../../../../_images/integrations/creating-nodes/json.png)

## HTML [\#](\#html "Permanent link")

The HTML editor allows users to create HTML templates in their workflows. The editor supports standard HTML, CSS in `<style>` tags, and expressions wrapped in `{{}}`. Users can add `<script>` tags to pull in additional JavaScript. n8n doesn't run this JavaScript during workflow execution.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>``` | ```<br>{<br>	displayName: 'HTML Template', // The value the user sees in the UI<br>	name: 'html', // The name used to reference the element UI within the code<br>	type: 'string',<br>	typeOptions: {<br>		editor: 'htmlEditor',<br>	},<br>	default: placeholder, // Loads n8n's placeholder HTML template<br>	noDataExpression: true, // Prevent using an expression for the field<br>	description: 'HTML template to render',<br>},<br>``` |

Refer to [`Html.node.ts`](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Html/Html.node.ts) for a live example.

## Notice [\#](\#notice "Permanent link")

Display a yellow box with a hint or extra info. Refer to [Node UI design](../../../plan/node-ui-design/) for guidance on writing good hints and info text.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```<br>{<br>  displayName: 'Your text here',<br>  name: 'notice',<br>  type: 'notice',<br>  default: '',<br>},<br>``` |

![Notice](../../../../../_images/integrations/creating-nodes/notice.png)

## Hints [\#](\#hints "Permanent link")

There are two types of hints: parameter hints and node hints:

- Parameter hints are small lines of text below a user input field.
- Node hints are a more powerful and flexible option than [Notice](#notice). Use them to display longer hints, in the input panel, output panel, or node details view.

### Add a parameter hint [\#](\#add-a-parameter-hint "Permanent link")

Add the `hint` parameter to a UI element:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```<br>{<br>	displayName: 'URL',<br>	name: 'url',<br>	type: 'string',<br>	hint: 'Enter a URL',<br>	...<br>}<br>``` |

### Add a node hint [\#](\#add-a-node-hint "Permanent link")

Define the node's hints in the `hints` property within the node `description`:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>``` | ```<br>description: INodeTypeDescription = {<br>	...<br>	hints: [<br>		{<br>			// The hint message. You can use HTML.<br>			message: "This node has many input items. Consider enabling <b>Execute Once</b> in the node\'s settings.",<br>			// Choose from: info, warning, danger. The default is 'info'.<br>			// Changes the color. info (grey), warning (yellow), danger (red)<br>			type: 'info',<br>			// Choose from: inputPane, outputPane, ndv. By default n8n displays the hint in both the input and output panels.<br>			location: 'outputPane',<br>			// Choose from: always, beforeExecution, afterExecution. The default is 'always'<br>			whenToDisplay: 'beforeExecution',<br>			// Optional. An expression. If it resolves to true, n8n displays the message. Defaults to true.<br>			displayCondition: '={{ $parameter["operation"] === "select" && $input.all().length > 1 }}'<br>		}<br>	]<br>	...<br>}<br>``` |

### Add a dynamic hint to a programmatic-style node [\#](\#add-a-dynamic-hint-to-a-programmatic-style-node "Permanent link")

In programmatic-style nodes you can create a dynamic message that includes information from the node execution. As it relies on the node output data, you can't display this type of hint until after execution.

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>``` | ```<br>if (operation === 'select' && items.length > 1 && !node.executeOnce) {<br>    // Expects two parameters: NodeExecutionData and an array of hints<br>	return new NodeExecutionOutput(<br>		[returnData],<br>		[<br>			{<br>				message: `This node ran ${items.length} times, once for each input item. To run for the first item only, enable <b>Execute once</b> in the node settings.`,<br>				location: 'outputPane',<br>			},<br>		],<br>	);<br>}<br>return [returnData];<br>``` |

For a live example of a dynamic hint in a programmatic-style node, view the [Split Out node code](https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/Transform/SplitOut/SplitOut.node.ts#L266).

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Deploy a node | n8n Docs Deploy a node#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/deploy/index.md "Edit this page")

# Deploy a node [\#](\#deploy-a-node "Permanent link")

This section contains details on how to deploy and share your node.

You can choose to:

- [Submit your node to the community node repository](submit-community-nodes/). This makes it available for everyone to use, and allows you to [install and use it](../../community-nodes/installation/) like any other community node. This is the only way to use custom nodes on cloud.
- Install the node into your n8n instance as a [private node](install-private-nodes/).

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/deploy/index.md "Edit this page")

# Deploy a node [\#](\#deploy-a-node "Permanent link")

This section contains details on how to deploy and share your node.

You can choose to:

- [Submit your node to the community node repository](submit-community-nodes/). This makes it available for everyone to use, and allows you to [install and use it](../../community-nodes/installation/) like any other community node. This is the only way to use custom nodes on cloud.
- Install the node into your n8n instance as a [private node](install-private-nodes/).

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Test a node | n8n Docs Test a node#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/test/index.md "Edit this page")

# Test a node [\#](\#test-a-node "Permanent link")

This section contains information about testing your node.

There are two ways to test your node:

- Manually, by [running it on your own machine](run-node-locally/) within a local n8n instance.
- Automatically, using the [linter](node-linter/).

You should use both methods before publishing your node.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/test/index.md "Edit this page")

# Test a node [\#](\#test-a-node "Permanent link")

This section contains information about testing your node.

There are two ways to test your node:

- Manually, by [running it on your own machine](run-node-locally/) within a local n8n instance.
- Automatically, using the [linter](node-linter/).

You should use both methods before publishing your node.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Using the n8n-node tool | n8n Docs Using the n8n-node tool#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/n8n-node.md "Edit this page")

# Using the n8n-node tool [\#](\#using-the-n8n-node-tool "Permanent link")

The `n8n-node` tool is the official CLI for developing community nodes for n8n. You can use it to scaffold out new nodes, build your projects, and run your node as you develop it.

Using `n8n-node`, you can create nodes that adhere to the [guidelines for verified community nodes](../reference/verification-guidelines/).

## Get n8n-node [\#](\#get-n8n-node "Permanent link")

### Run n8n-node without installing [\#](\#run-n8n-node-without-installing "Permanent link")

You can create an `n8n-node` project directly without installing by using the [`@n8n/create-node` initializer](https://www.npmjs.com/package/@n8n/create-node) with your package manager:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm create @n8n/node@latest<br>``` |

This sets up the initial project files locally (an alternative to installing `n8n-node` locally and explicitly running the [`new` command](#new)). Afterward, you run the rest of the `n8n-node` commands through your package manager's script runner inside the project directory (for example, `npm run dev`).

### Install n8n-node globally [\#](\#install-n8n-node-globally "Permanent link")

You can install `n8n-node` globally with `npm`:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm install --global @n8n/node-cli<br>``` |

Verify access to the command by typing:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node --version<br>``` |

## Command overview [\#](\#command-overview "Permanent link")

The `n8n-node` tool provides the following commands:

### new [\#](\#new "Permanent link")

The `new` command creates the file system structure and metadata for a new node. This command initializes the same structure as outlined in [run n8n-node without installing](#run-n8n-node-without-installing).

When called, it interactively prompts for details about your project to customize your starting code. You'll provide the project name, choose a node type, and select the starting template that best matches your needs. The `n8n-node` tool will create your project file structure and optionally install your initial project dependencies.

Learn more about how to use the `new` command in the [creating a new node section](#creating-a-new-node).

### build [\#](\#build "Permanent link")

The `build` command compiles your node and copies all the required assets.

Learn more about how to use the `build` command in the [building your node section](#building-your-node).

### dev [\#](\#dev "Permanent link")

The `dev` command runs n8n with your node. It monitors your project directory and automatically rebuilds the live preview when it detects changes.

Learn more about how to use the `dev` command in the [testing your node in n8n section](#testing-your-node-in-n8n).

### lint [\#](\#lint "Permanent link")

The `lint` command checks the code for the node in the current directory. You can optionally use with the `--fix` option to attempt to automatically fix any issues it identifies.

Learn more about how to use the `lint` command in the [lint your node section](#lint-your-node).

### release [\#](\#release "Permanent link")

The `release` command publishes your community node package to npm. It uses [`release-it`](https://github.com/release-it/release-it) to clean, check and cleanly build your package before publishing it to npm.

Learn more about how to use the `release` command in the [release your node section](#release-your-node).

## Creating a new node [\#](\#creating-a-new-node "Permanent link")

To create a new node with `n8n-node`, call `n8n-node new`. You can call this command entirely interactively or provide details on the command line.

Create new node without installing

You can optionally create an `n8n-node` project directly without installing `n8n-node` by using the [`@n8n/create-node` initializer](https://www.npmjs.com/package/@n8n/create-node) with your package manager.

In the commands below, substitute `n8n-node new` with `npm create @n8n/node@latest`. When using this form, you must add a double dash ( `--`) before including any options (like `--template`). For example:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm create @n8n/node@latest n8n-nodes-mynode -- --template declarative/custom<br>``` |

The command will prompt for any missing information about your node and then generate a project structure to get you started. By default, it will follow up by installing the initial project dependencies (you can disable this by passing the `--skip-install` flag).

### Setting node details interactively [\#](\#setting-node-details-interactively "Permanent link")

When called without arguments, `n8n-node new` prompts you for details about your new node interactively:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node new<br>``` |

This will start an interactive prompt where you can define the details of your project:

- **What is your node called?** The name of your node. This impacts the name of your project directory, package name, and the n8n node itself. The name must use one of the following formats:
  - `n8n-nodes-<YOUR_NODE_NAME>`
  - `@<YOUR_ORG>/n8n-nodes-<YOUR_NODE_NAME>`
- **What kind of node are you building?** The [node type](../../plan/choose-node-method/) you want to build:
  - **HTTP API**: A low-code, declarative node structure that's designed for faster approval for n8n Cloud.
  - **Other**: A programmatic style node with full flexibility.
- **What template do you want to use?** When using the HTTP API, you can choose the template to start from:
  - **GitHub Issues API**: A demo node that includes multiple operations and credentials. This can help you get familiar with the node structure and conventions.
  - **Start from scratch**: A blank template that will guide you through your custom setup with some further prompts.

When choosing HTTP API > Start from scratch, `n8n-node` will ask you the following:

- **What's the base URL of the API?** The root URL for the API you plan to integrate with.
- **What type of authentication does your API use?** The authentication your node should provide:
  - **API Key**: Send a secret key using headers, query parameters, or the request body.
  - **Bearer Token**: Send a token using the Authorization header ( `Authorization: Bearer <token>`).
  - **OAuth2**: Use an OAuth 2.0 flow to get access tokens on behalf of a user or app.
  - **Basic Auth**: Send the base64-encoded username and password through Authorization headers.
  - **Custom**: Create your own credential logic. This will create an empty credential class that you can customize according to your needs.
  - **None**: No authentication necessary. Don't create a credential class for the node.

Once you've made your selections, `n8n-node` will create a new project directory for your node in the current directory. By default, it will also install the initial project dependencies (you can disable this by passing the `--skip-install` flag).

### Providing node details on the command line [\#](\#providing-node-details-on-the-command-line "Permanent link")

You can provide some of your node details on the command line to avoid prompts.

You can include the name you want to use for your node an argument:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node new n8n-nodes-myproject<br>``` |

Node name format

Node names must use one of the following formats:

- `@<YOUR_ORG>/n8n-nodes-<YOUR_NODE_NAME>`
- `n8n-nodes-<YOUR_NODE_NAME>`

If you know the template you want to use ahead of time, you can also pass the value using the `--template` flag:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node new --template declarative/custom<br>``` |

The template must be one of the following:

- `declarative/github-issues`: A demo node that includes multiple operations and credentials. This can help you get familiar with the node structure and conventions.
- `declarative/custom`: A blank template that will guide you through your custom setup with some further prompts.
- `programmatic/example`: A programmatic style node with full flexibility.

## Building your node [\#](\#building-your-node "Permanent link")

You can build your node by running the `build` command in your project's root directory:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node build<br>``` |

`n8n-node` will compile your TypeScript files and bundle your other project assets. You can also call the `build` script from your package manager. For instance, if you're using `npm`, this works the same:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm run build<br>``` |

## Lint your node [\#](\#lint-your-node "Permanent link")

The `n8n-node` tool automatically creates a `lint` script for your project as well. You can run with your package manager. For example:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node lint<br>``` |

You can also run through your package manager's script runner:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm run lint<br>``` |

If you include the `--fix` option (also callable with `npm run lint:fix`), `n8n-node` will attempt to fix the issues that it identifies:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node lint --fix<br>``` |

## Testing your node in n8n [\#](\#testing-your-node-in-n8n "Permanent link")

To test your node in n8n, you run the `dev` command in your project's root directory:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node dev<br>``` |

As with the `build` command, you can also run this through your package manager. For example:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm run dev<br>``` |

`n8n-node` will compile your project and then start up a local n8n instance through `npm` with your node loaded.

Visit your `localhost:5678` to sign in to your n8n instance. If you open a workflow, your node appears in the nodes panel:

![node in nodes panel](../../../../_images/integrations/creating-nodes/n8n-node/node_in_nodes_panel.png)

From there, you can add it to your workflow and test the node's functionality as you develop.

## Release your node [\#](\#release-your-node "Permanent link")

To publish your node, run the `release` command in your project directory. This command uses [`release-it`](https://github.com/release-it/release-it) to build and publish your node.

Log in to npm

To use the `release` command, you must log in to npm using `npm login` command. Without this, `n8n-node` won't have authorization to publish your project files.

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node release<br>``` |

To run with `npm`, type:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm run release<br>``` |

When you run the `release` command, `n8n-node` will perform the following actions:

- build the node
- run lint checks against your files
- update the changelog
- create git tags
- create a GitHub release
- publish the package to npm

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/n8n-node.md "Edit this page")

# Using the n8n-node tool [\#](\#using-the-n8n-node-tool "Permanent link")

The `n8n-node` tool is the official CLI for developing community nodes for n8n. You can use it to scaffold out new nodes, build your projects, and run your node as you develop it.

Using `n8n-node`, you can create nodes that adhere to the [guidelines for verified community nodes](../reference/verification-guidelines/).

## Get n8n-node [\#](\#get-n8n-node "Permanent link")

### Run n8n-node without installing [\#](\#run-n8n-node-without-installing "Permanent link")

You can create an `n8n-node` project directly without installing by using the [`@n8n/create-node` initializer](https://www.npmjs.com/package/@n8n/create-node) with your package manager:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm create @n8n/node@latest<br>``` |

This sets up the initial project files locally (an alternative to installing `n8n-node` locally and explicitly running the [`new` command](#new)). Afterward, you run the rest of the `n8n-node` commands through your package manager's script runner inside the project directory (for example, `npm run dev`).

### Install n8n-node globally [\#](\#install-n8n-node-globally "Permanent link")

You can install `n8n-node` globally with `npm`:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm install --global @n8n/node-cli<br>``` |

Verify access to the command by typing:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node --version<br>``` |

## Command overview [\#](\#command-overview "Permanent link")

The `n8n-node` tool provides the following commands:

### new [\#](\#new "Permanent link")

The `new` command creates the file system structure and metadata for a new node. This command initializes the same structure as outlined in [run n8n-node without installing](#run-n8n-node-without-installing).

When called, it interactively prompts for details about your project to customize your starting code. You'll provide the project name, choose a node type, and select the starting template that best matches your needs. The `n8n-node` tool will create your project file structure and optionally install your initial project dependencies.

Learn more about how to use the `new` command in the [creating a new node section](#creating-a-new-node).

### build [\#](\#build "Permanent link")

The `build` command compiles your node and copies all the required assets.

Learn more about how to use the `build` command in the [building your node section](#building-your-node).

### dev [\#](\#dev "Permanent link")

The `dev` command runs n8n with your node. It monitors your project directory and automatically rebuilds the live preview when it detects changes.

Learn more about how to use the `dev` command in the [testing your node in n8n section](#testing-your-node-in-n8n).

### lint [\#](\#lint "Permanent link")

The `lint` command checks the code for the node in the current directory. You can optionally use with the `--fix` option to attempt to automatically fix any issues it identifies.

Learn more about how to use the `lint` command in the [lint your node section](#lint-your-node).

### release [\#](\#release "Permanent link")

The `release` command publishes your community node package to npm. It uses [`release-it`](https://github.com/release-it/release-it) to clean, check and cleanly build your package before publishing it to npm.

Learn more about how to use the `release` command in the [release your node section](#release-your-node).

## Creating a new node [\#](\#creating-a-new-node "Permanent link")

To create a new node with `n8n-node`, call `n8n-node new`. You can call this command entirely interactively or provide details on the command line.

Create new node without installing

You can optionally create an `n8n-node` project directly without installing `n8n-node` by using the [`@n8n/create-node` initializer](https://www.npmjs.com/package/@n8n/create-node) with your package manager.

In the commands below, substitute `n8n-node new` with `npm create @n8n/node@latest`. When using this form, you must add a double dash ( `--`) before including any options (like `--template`). For example:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm create @n8n/node@latest n8n-nodes-mynode -- --template declarative/custom<br>``` |

The command will prompt for any missing information about your node and then generate a project structure to get you started. By default, it will follow up by installing the initial project dependencies (you can disable this by passing the `--skip-install` flag).

### Setting node details interactively [\#](\#setting-node-details-interactively "Permanent link")

When called without arguments, `n8n-node new` prompts you for details about your new node interactively:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node new<br>``` |

This will start an interactive prompt where you can define the details of your project:

- **What is your node called?** The name of your node. This impacts the name of your project directory, package name, and the n8n node itself. The name must use one of the following formats:
  - `n8n-nodes-<YOUR_NODE_NAME>`
  - `@<YOUR_ORG>/n8n-nodes-<YOUR_NODE_NAME>`
- **What kind of node are you building?** The [node type](../../plan/choose-node-method/) you want to build:
  - **HTTP API**: A low-code, declarative node structure that's designed for faster approval for n8n Cloud.
  - **Other**: A programmatic style node with full flexibility.
- **What template do you want to use?** When using the HTTP API, you can choose the template to start from:
  - **GitHub Issues API**: A demo node that includes multiple operations and credentials. This can help you get familiar with the node structure and conventions.
  - **Start from scratch**: A blank template that will guide you through your custom setup with some further prompts.

When choosing HTTP API > Start from scratch, `n8n-node` will ask you the following:

- **What's the base URL of the API?** The root URL for the API you plan to integrate with.
- **What type of authentication does your API use?** The authentication your node should provide:
  - **API Key**: Send a secret key using headers, query parameters, or the request body.
  - **Bearer Token**: Send a token using the Authorization header ( `Authorization: Bearer <token>`).
  - **OAuth2**: Use an OAuth 2.0 flow to get access tokens on behalf of a user or app.
  - **Basic Auth**: Send the base64-encoded username and password through Authorization headers.
  - **Custom**: Create your own credential logic. This will create an empty credential class that you can customize according to your needs.
  - **None**: No authentication necessary. Don't create a credential class for the node.

Once you've made your selections, `n8n-node` will create a new project directory for your node in the current directory. By default, it will also install the initial project dependencies (you can disable this by passing the `--skip-install` flag).

### Providing node details on the command line [\#](\#providing-node-details-on-the-command-line "Permanent link")

You can provide some of your node details on the command line to avoid prompts.

You can include the name you want to use for your node an argument:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node new n8n-nodes-myproject<br>``` |

Node name format

Node names must use one of the following formats:

- `@<YOUR_ORG>/n8n-nodes-<YOUR_NODE_NAME>`
- `n8n-nodes-<YOUR_NODE_NAME>`

If you know the template you want to use ahead of time, you can also pass the value using the `--template` flag:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node new --template declarative/custom<br>``` |

The template must be one of the following:

- `declarative/github-issues`: A demo node that includes multiple operations and credentials. This can help you get familiar with the node structure and conventions.
- `declarative/custom`: A blank template that will guide you through your custom setup with some further prompts.
- `programmatic/example`: A programmatic style node with full flexibility.

## Building your node [\#](\#building-your-node "Permanent link")

You can build your node by running the `build` command in your project's root directory:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node build<br>``` |

`n8n-node` will compile your TypeScript files and bundle your other project assets. You can also call the `build` script from your package manager. For instance, if you're using `npm`, this works the same:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm run build<br>``` |

## Lint your node [\#](\#lint-your-node "Permanent link")

The `n8n-node` tool automatically creates a `lint` script for your project as well. You can run with your package manager. For example:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node lint<br>``` |

You can also run through your package manager's script runner:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm run lint<br>``` |

If you include the `--fix` option (also callable with `npm run lint:fix`), `n8n-node` will attempt to fix the issues that it identifies:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node lint --fix<br>``` |

## Testing your node in n8n [\#](\#testing-your-node-in-n8n "Permanent link")

To test your node in n8n, you run the `dev` command in your project's root directory:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node dev<br>``` |

As with the `build` command, you can also run this through your package manager. For example:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm run dev<br>``` |

`n8n-node` will compile your project and then start up a local n8n instance through `npm` with your node loaded.

Visit your `localhost:5678` to sign in to your n8n instance. If you open a workflow, your node appears in the nodes panel:

![node in nodes panel](../../../../_images/integrations/creating-nodes/n8n-node/node_in_nodes_panel.png)

From there, you can add it to your workflow and test the node's functionality as you develop.

## Release your node [\#](\#release-your-node "Permanent link")

To publish your node, run the `release` command in your project directory. This command uses [`release-it`](https://github.com/release-it/release-it) to build and publish your node.

Log in to npm

To use the `release` command, you must log in to npm using `npm login` command. Without this, `n8n-node` won't have authorization to publish your project files.

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>n8n-node release<br>``` |

To run with `npm`, type:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>npm run release<br>``` |

When you run the `release` command, `n8n-node` will perform the following actions:

- build the node
- run lint checks against your files
- update the changelog
- create git tags
- create a GitHub release
- publish the package to npm

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Node building reference | n8n Docs Node building reference#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/index.md "Edit this page")

# Node building reference [\#](\#node-building-reference "Permanent link")

This section contains reference information, including details about:

- [Node UI elements](ui-elements/)
- [Organizing your node files](node-file-structure/)
- Key parameters in your node's [base file](node-base-files/) and [credentials file](credentials-files/).
- [UX guidelines](ux-guidelines/) and [verification guidelines](verification-guidelines/) for submitting your node for [verification by n8n](../../../community-nodes/installation/verified-install/).

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/index.md "Edit this page")

# Node building reference [\#](\#node-building-reference "Permanent link")

This section contains reference information, including details about:

- [Node UI elements](ui-elements/)
- [Organizing your node files](node-file-structure/)
- Key parameters in your node's [base file](node-base-files/) and [credentials file](credentials-files/).
- [UX guidelines](ux-guidelines/) and [verification guidelines](verification-guidelines/) for submitting your node for [verification by n8n](../../../community-nodes/installation/verified-install/).

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Code standards | n8n Docs Code standards#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/code-standards.md "Edit this page")

# Code standards [\#](\#code-standards "Permanent link")

Following defined code standards when building your node makes your code more readable and maintainable, and helps avoid errors. This document provides guidance on good code practices for node building. It focuses on code details. For UI standards and UX guidance, refer to [Node UI design](../../../plan/node-ui-design/).

## Use the linter [\#](\#use-the-linter "Permanent link")

The n8n node linter provides automatic checking for many of the node-building standards. You should ensure your node passes the linter's checks before publishing it. Refer to the [n8n node linter](../../../test/node-linter/) documentation for more information.

## Use the starter [\#](\#use-the-starter "Permanent link")

The n8n node starter project includes a recommended setup, dependencies (including the linter), and examples to help you get started. Begin new projects with the [starter](https://github.com/n8n-io/n8n-nodes-starter).

## Write in TypeScript [\#](\#write-in-typescript "Permanent link")

All n8n code is TypeScript. Writing your nodes in TypeScript can speed up development and reduce bugs.

## Detailed guidelines for writing a node [\#](\#detailed-guidelines-for-writing-a-node "Permanent link")

These guidelines apply to any node you build.

### Resources and operations [\#](\#resources-and-operations "Permanent link")

If your node can perform several operations, call the parameter that sets the operation `Operation`. If your node can do these operations on more than one resource, create a `Resource` parameter. The following code sample shows a basic resource and operations setup:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>``` | ```<br>export const ExampleNode implements INodeType {<br>    description: {<br>        displayName: 'Example Node',<br>        ...<br>        properties: [<br>            {<br>                displayName: 'Resource',<br>                name: 'resource',<br>                type: 'options',<br>                options: [<br>                    {<br>                        name: 'Resource One',<br>                        value: 'resourceOne'<br>                    },<br>                    {<br>                        name: 'Resource Two',<br>                        value: 'resourceTwo'<br>                    }<br>                ],<br>                default: 'resourceOne'<br>            },<br>            {<br>                displayName: 'Operation',<br>                name: 'operation',<br>                type: 'options',<br>                // Only show these operations for Resource One<br>                displayOptions: {<br>                    show: {<br>                        resource: [<br>                            'resourceOne'<br>                        ]<br>                    }<br>                },<br>                options: [<br>                    {<br>                        name: 'Create',<br>                        value: 'create',<br>                        description: 'Create an instance of Resource One'<br>                    }<br>                ]<br>            }<br>        ]<br>    }<br>}<br>``` |

### Reuse internal parameter names [\#](\#reuse-internal-parameter-names "Permanent link")

All resource and operation fields in an n8n node have two settings: a display name, set using the `name` parameter, and an internal name, set using the `value` parameter. Reusing the internal name for fields allows n8n to preserve user-entered data if a user switches operations.

For example: you're building a node with a resource named 'Order'. This resource has several operations, including Get, Edit, and Delete. Each of these operations uses an order ID to perform the operation on the specified order. You need to display an ID field for the user. This field has a display label, and an internal name. By using the same internal name (set in `value`) for the operation ID field on each resource, a user can enter the ID with the Get operation selected, and not lose it if they switch to Edit.

When reusing the internal name, you must ensure that only one field is visible to the user at a time. You can control this using `displayOptions`.

## Detailed guidelines for writing a programmatic-style node [\#](\#detailed-guidelines-for-writing-a-programmatic-style-node "Permanent link")

These guidelines apply when building nodes using the programmatic node-building style. They aren't relevant when using the declarative style. For more information on different node-building styles, refer to [Choose your node building approach](../../../plan/choose-node-method/).

### Don't change incoming data [\#](\#dont-change-incoming-data "Permanent link")

Never change the incoming data a node receives (data accessible with `this.getInputData()`) as all nodes share it. If you need to add, change, or delete data, clone the incoming data and return the new data. If you don't do this, sibling nodes that execute after the current one will operate on the altered data and process incorrect data.

It's not necessary to always clone all the data. For example, if a node changes the binary data but not the JSON data, you can create a new item that reuses the reference to the JSON item.

### Use the built in request library [\#](\#use-the-built-in-request-library "Permanent link")

Some third-party services have their own libraries on npm, which make it easier to create an integration. The problem with these packages is that you add another dependency (plus all the dependencies of the dependencies). This adds more and more code, which has to be loaded, can introduce security vulnerabilities, bugs, and so on. Instead, use the built-in module:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```<br>// If no auth needed<br>const response = await this.helpers.httpRequest(options);<br>// If auth needed<br>const response = await this.helpers.httpRequestWithAuthentication.call(<br>	this, <br>	'credentialTypeName', // For example: pipedriveApi<br>	options,<br>);<br>``` |

This uses the npm package [Axios](https://www.npmjs.com/package/axios).

Refer to [HTTP helpers](../http-helpers/) for more information, and for migration instructions for the removed `this.helpers.request`.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/code-standards.md "Edit this page")

# Code standards [\#](\#code-standards "Permanent link")

Following defined code standards when building your node makes your code more readable and maintainable, and helps avoid errors. This document provides guidance on good code practices for node building. It focuses on code details. For UI standards and UX guidance, refer to [Node UI design](../../../plan/node-ui-design/).

## Use the linter [\#](\#use-the-linter "Permanent link")

The n8n node linter provides automatic checking for many of the node-building standards. You should ensure your node passes the linter's checks before publishing it. Refer to the [n8n node linter](../../../test/node-linter/) documentation for more information.

## Use the starter [\#](\#use-the-starter "Permanent link")

The n8n node starter project includes a recommended setup, dependencies (including the linter), and examples to help you get started. Begin new projects with the [starter](https://github.com/n8n-io/n8n-nodes-starter).

## Write in TypeScript [\#](\#write-in-typescript "Permanent link")

All n8n code is TypeScript. Writing your nodes in TypeScript can speed up development and reduce bugs.

## Detailed guidelines for writing a node [\#](\#detailed-guidelines-for-writing-a-node "Permanent link")

These guidelines apply to any node you build.

### Resources and operations [\#](\#resources-and-operations "Permanent link")

If your node can perform several operations, call the parameter that sets the operation `Operation`. If your node can do these operations on more than one resource, create a `Resource` parameter. The following code sample shows a basic resource and operations setup:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>``` | ```<br>export const ExampleNode implements INodeType {<br>    description: {<br>        displayName: 'Example Node',<br>        ...<br>        properties: [<br>            {<br>                displayName: 'Resource',<br>                name: 'resource',<br>                type: 'options',<br>                options: [<br>                    {<br>                        name: 'Resource One',<br>                        value: 'resourceOne'<br>                    },<br>                    {<br>                        name: 'Resource Two',<br>                        value: 'resourceTwo'<br>                    }<br>                ],<br>                default: 'resourceOne'<br>            },<br>            {<br>                displayName: 'Operation',<br>                name: 'operation',<br>                type: 'options',<br>                // Only show these operations for Resource One<br>                displayOptions: {<br>                    show: {<br>                        resource: [<br>                            'resourceOne'<br>                        ]<br>                    }<br>                },<br>                options: [<br>                    {<br>                        name: 'Create',<br>                        value: 'create',<br>                        description: 'Create an instance of Resource One'<br>                    }<br>                ]<br>            }<br>        ]<br>    }<br>}<br>``` |

### Reuse internal parameter names [\#](\#reuse-internal-parameter-names "Permanent link")

All resource and operation fields in an n8n node have two settings: a display name, set using the `name` parameter, and an internal name, set using the `value` parameter. Reusing the internal name for fields allows n8n to preserve user-entered data if a user switches operations.

For example: you're building a node with a resource named 'Order'. This resource has several operations, including Get, Edit, and Delete. Each of these operations uses an order ID to perform the operation on the specified order. You need to display an ID field for the user. This field has a display label, and an internal name. By using the same internal name (set in `value`) for the operation ID field on each resource, a user can enter the ID with the Get operation selected, and not lose it if they switch to Edit.

When reusing the internal name, you must ensure that only one field is visible to the user at a time. You can control this using `displayOptions`.

## Detailed guidelines for writing a programmatic-style node [\#](\#detailed-guidelines-for-writing-a-programmatic-style-node "Permanent link")

These guidelines apply when building nodes using the programmatic node-building style. They aren't relevant when using the declarative style. For more information on different node-building styles, refer to [Choose your node building approach](../../../plan/choose-node-method/).

### Don't change incoming data [\#](\#dont-change-incoming-data "Permanent link")

Never change the incoming data a node receives (data accessible with `this.getInputData()`) as all nodes share it. If you need to add, change, or delete data, clone the incoming data and return the new data. If you don't do this, sibling nodes that execute after the current one will operate on the altered data and process incorrect data.

It's not necessary to always clone all the data. For example, if a node changes the binary data but not the JSON data, you can create a new item that reuses the reference to the JSON item.

### Use the built in request library [\#](\#use-the-built-in-request-library "Permanent link")

Some third-party services have their own libraries on npm, which make it easier to create an integration. The problem with these packages is that you add another dependency (plus all the dependencies of the dependencies). This adds more and more code, which has to be loaded, can introduce security vulnerabilities, bugs, and so on. Instead, use the built-in module:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```<br>// If no auth needed<br>const response = await this.helpers.httpRequest(options);<br>// If auth needed<br>const response = await this.helpers.httpRequestWithAuthentication.call(<br>	this, <br>	'credentialTypeName', // For example: pipedriveApi<br>	options,<br>);<br>``` |

This uses the npm package [Axios](https://www.npmjs.com/package/axios).

Refer to [HTTP helpers](../http-helpers/) for more information, and for migration instructions for the removed `this.helpers.request`.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Credentials files | n8n Docs Credentials file#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/credentials-files.md "Edit this page")

# Credentials file [\#](\#credentials-file "Permanent link")

The credentials file defines the authorization methods for the node. The settings in this file affect what n8n displays in the **Credentials** modal, and must reflect the authentication requirements of the service you're connecting to.

In the credentials file, you can use all the [n8n UI elements](../ui-elements/). n8n encrypts the data that's stored using credentials using an encryption key.

## Structure of the credentials file [\#](\#structure-of-the-credentials-file "Permanent link")

The credentials file follows this basic structure:

1. Import statements
2. Create a class for the credentials
3. Within the class, define the properties that control authentication for the node.

### Outline structure [\#](\#outline-structure "Permanent link")

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>``` | ```<br>import {<br>	IAuthenticateGeneric,<br>	ICredentialTestRequest,<br>	ICredentialType,<br>	INodeProperties,<br>} from 'n8n-workflow';<br>export class ExampleNode implements ICredentialType {<br>	name = 'exampleNodeApi';<br>	displayName = 'Example Node API';<br>	documentationUrl = '';<br>	properties: INodeProperties[] = [<br>		{<br>			displayName: 'API Key',<br>			name: 'apiKey',<br>			type: 'string',<br>			default: '',<br>		},<br>	];<br>	authenticate: IAuthenticateGeneric = {<br>		type: 'generic',<br>		properties: {<br>    		// Can be body, header, qs or auth<br>			qs: {<br>        		// Use the value from `apiKey` above<br>				'api_key': '={{$credentials.apiKey}}'<br>			}<br>		},<br>	};<br>	test: ICredentialTestRequest = {<br>		request: {<br>			baseURL: '={{$credentials?.domain}}',<br>			url: '/bearer',<br>		},<br>	};<br>}<br>``` |

## Parameters [\#](\#parameters "Permanent link")

### `name` [\#](\#name "Permanent link")

String. The internal name of the object. Used to reference it from other places in the node.

### `displayName` [\#](\#displayname "Permanent link")

String. The name n8n uses in the GUI.

### `documentationUrl` [\#](\#documentationurl "Permanent link")

String. URL to your credentials documentation.

### `properties` [\#](\#properties "Permanent link")

Each object contains:

- `displayName`: the name n8n uses in the GUI.
- `name`: the internal name of the object. Used to reference it from other places in the node.
- `type`: the data type expected, such as `string`.
- `default`: the URL that n8n should use to test credentials.

### `authenticate` [\#](\#authenticate "Permanent link")

- `authenticate`: Object. Contains objects that tell n8n how to inject the authentication data as part of the API request.

#### `type` [\#](\#type "Permanent link")

String. If you're using an authentication method that sends data in the header, body, or query string, set this to `'generic'`.

#### `properties` [\#](\#properties_1 "Permanent link")

Object. Defines the authentication methods. Options are:

- `body`: Object. Sends authentication data in the request body. Can contain nested objects.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```<br>authenticate: IAuthenticateGeneric = {<br>	type: 'generic',<br>	properties: {<br>		body: {<br>			username: '={{$credentials.username}}',<br>			password: '={{$credentials.password}}',<br>		},<br>	},<br>};<br>``` |

- `header`: Object. Send authentication data in the request header.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```<br>authenticate: IAuthenticateGeneric = {<br>	type: 'generic',<br>	properties: {<br>		header: {<br>			Authorization: '=Bearer {{$credentials.authToken}}',<br>		},<br>	},<br>};<br>``` |

- `qs`: Object. Stands for "query string." Send authentication data in the request query string.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```<br>authenticate: IAuthenticateGeneric = {<br>	type: 'generic',<br>	properties: {<br>		qs: {<br>			token: '={{$credentials.token}}',<br>		},<br>	},<br>};<br>``` |

- `auth`: Object. Used for Basic Auth. Requires `username` and `password` as the key names.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```<br>authenticate: IAuthenticateGeneric = {<br>	type: 'generic',<br>	properties: {<br>		auth: {<br>			username: '={{$credentials.username}}',<br>			password: '={{$credentials.password}}',<br>		},<br>	},<br>};<br>``` |

### `test` [\#](\#test "Permanent link")

Provide a `request` object containing a URL and authentication type that n8n can use to test the credential.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```<br>test: ICredentialTestRequest = {<br>		request: {<br>			baseURL: '={{$credentials?.domain}}',<br>			url: '/bearer',<br>		},<br>	};<br>``` |

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/credentials-files.md "Edit this page")

# Credentials file [\#](\#credentials-file "Permanent link")

The credentials file defines the authorization methods for the node. The settings in this file affect what n8n displays in the **Credentials** modal, and must reflect the authentication requirements of the service you're connecting to.

In the credentials file, you can use all the [n8n UI elements](../ui-elements/). n8n encrypts the data that's stored using credentials using an encryption key.

## Structure of the credentials file [\#](\#structure-of-the-credentials-file "Permanent link")

The credentials file follows this basic structure:

1. Import statements
2. Create a class for the credentials
3. Within the class, define the properties that control authentication for the node.

### Outline structure [\#](\#outline-structure "Permanent link")

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>``` | ```<br>import {<br>	IAuthenticateGeneric,<br>	ICredentialTestRequest,<br>	ICredentialType,<br>	INodeProperties,<br>} from 'n8n-workflow';<br>export class ExampleNode implements ICredentialType {<br>	name = 'exampleNodeApi';<br>	displayName = 'Example Node API';<br>	documentationUrl = '';<br>	properties: INodeProperties[] = [<br>		{<br>			displayName: 'API Key',<br>			name: 'apiKey',<br>			type: 'string',<br>			default: '',<br>		},<br>	];<br>	authenticate: IAuthenticateGeneric = {<br>		type: 'generic',<br>		properties: {<br>    		// Can be body, header, qs or auth<br>			qs: {<br>        		// Use the value from `apiKey` above<br>				'api_key': '={{$credentials.apiKey}}'<br>			}<br>		},<br>	};<br>	test: ICredentialTestRequest = {<br>		request: {<br>			baseURL: '={{$credentials?.domain}}',<br>			url: '/bearer',<br>		},<br>	};<br>}<br>``` |

## Parameters [\#](\#parameters "Permanent link")

### `name` [\#](\#name "Permanent link")

String. The internal name of the object. Used to reference it from other places in the node.

### `displayName` [\#](\#displayname "Permanent link")

String. The name n8n uses in the GUI.

### `documentationUrl` [\#](\#documentationurl "Permanent link")

String. URL to your credentials documentation.

### `properties` [\#](\#properties "Permanent link")

Each object contains:

- `displayName`: the name n8n uses in the GUI.
- `name`: the internal name of the object. Used to reference it from other places in the node.
- `type`: the data type expected, such as `string`.
- `default`: the URL that n8n should use to test credentials.

### `authenticate` [\#](\#authenticate "Permanent link")

- `authenticate`: Object. Contains objects that tell n8n how to inject the authentication data as part of the API request.

#### `type` [\#](\#type "Permanent link")

String. If you're using an authentication method that sends data in the header, body, or query string, set this to `'generic'`.

#### `properties` [\#](\#properties_1 "Permanent link")

Object. Defines the authentication methods. Options are:

- `body`: Object. Sends authentication data in the request body. Can contain nested objects.

  |     |     |
  | --- | --- |
  | ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```<br>authenticate: IAuthenticateGeneric = {<br>	type: 'generic',<br>	properties: {<br>		body: {<br>			username: '={{$credentials.username}}',<br>			password: '={{$credentials.password}}',<br>		},<br>	},<br>};<br>``` |

- `header`: Object. Send authentication data in the request header.

  |     |     |
  | --- | --- |
  | ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```<br>authenticate: IAuthenticateGeneric = {<br>	type: 'generic',<br>	properties: {<br>		header: {<br>			Authorization: '=Bearer {{$credentials.authToken}}',<br>		},<br>	},<br>};<br>``` |

- `qs`: Object. Stands for "query string." Send authentication data in the request query string.

  |     |     |
  | --- | --- |
  | ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>``` | ```<br>authenticate: IAuthenticateGeneric = {<br>	type: 'generic',<br>	properties: {<br>		qs: {<br>			token: '={{$credentials.token}}',<br>		},<br>	},<br>};<br>``` |

- `auth`: Object. Used for Basic Auth. Requires `username` and `password` as the key names.

  |     |     |
  | --- | --- |
  | ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```<br>authenticate: IAuthenticateGeneric = {<br>	type: 'generic',<br>	properties: {<br>		auth: {<br>			username: '={{$credentials.username}}',<br>			password: '={{$credentials.password}}',<br>		},<br>	},<br>};<br>``` |

### `test` [\#](\#test "Permanent link")

Provide a `request` object containing a URL and authentication type that n8n can use to test the credential.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```<br>test: ICredentialTestRequest = {<br>		request: {<br>			baseURL: '={{$credentials?.domain}}',<br>			url: '/bearer',<br>		},<br>	};<br>``` |

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Node base file | n8n Docs Node base file#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/node-base-files/index.md "Edit this page")

# Node base file [\#](\#node-base-file "Permanent link")

The node base file contains the core code of your node. All nodes must have a base file. The contents of this file are different depending on whether you're building a declarative-style or programmatic-style node. For guidance on which style to use, refer to [Choose your node building approach](../../../plan/choose-node-method/).

These documents give short code snippets to help understand the code structure and concepts. For full walk-throughs of building a node, including real-world code examples, refer to [Build a declarative-style node](../../declarative-style-node/) or [Build a programmatic-style node](../../programmatic-style-node/).

You can also explore the [n8n-nodes-starter](https://github.com/n8n-io/n8n-nodes-starter) and n8n's own [nodes](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes) for a wider range of examples. The starter contains basic examples that you can build on. The n8n [Mattermost node](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Mattermost) is a good example of a more complex programmatic-style node, including versioning.

For all nodes, refer to the:

- [Structure of the node base file](structure/)
- [Standard parameters](standard-parameters/)

For declarative-style nodes, refer to the:

- [Declarative-style parameters](declarative-style-parameters/)

For programmatic-style nodes, refer to the:

- [Programmatic-style parameters](programmatic-style-parameters/)
- [Programmatic-style execute() method](programmatic-style-execute-method/)

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/node-base-files/index.md "Edit this page")

# Node base file [\#](\#node-base-file "Permanent link")

The node base file contains the core code of your node. All nodes must have a base file. The contents of this file are different depending on whether you're building a declarative-style or programmatic-style node. For guidance on which style to use, refer to [Choose your node building approach](../../../plan/choose-node-method/).

These documents give short code snippets to help understand the code structure and concepts. For full walk-throughs of building a node, including real-world code examples, refer to [Build a declarative-style node](../../declarative-style-node/) or [Build a programmatic-style node](../../programmatic-style-node/).

You can also explore the [n8n-nodes-starter](https://github.com/n8n-io/n8n-nodes-starter) and n8n's own [nodes](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes) for a wider range of examples. The starter contains basic examples that you can build on. The n8n [Mattermost node](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes/Mattermost) is a good example of a more complex programmatic-style node, including versioning.

For all nodes, refer to the:

- [Structure of the node base file](structure/)
- [Standard parameters](standard-parameters/)

For declarative-style nodes, refer to the:

- [Declarative-style parameters](declarative-style-parameters/)

For programmatic-style nodes, refer to the:

- [Programmatic-style parameters](programmatic-style-parameters/)
- [Programmatic-style execute() method](programmatic-style-execute-method/)

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Codex files | n8n Docs Node codex files#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/node-codex-files.md "Edit this page")

# Node codex files [\#](\#node-codex-files "Permanent link")

The codex file contains metadata about your node. This file is the JSON file at the root of your node. For example, the [`HttpBin.node.json`](https://github.com/n8n-io/n8n-nodes-starter/blob/master/nodes/HttpBin/HttpBin.node.json) file in the n8n starter.

The codex filename must match the node base filename. For example, given a node base file named `MyNode.node.ts`, the codex would be named `MyNode.node.json`.

| Parameter | Description |
| --- | --- |
| `node` | Includes the node name. Must start with `n8n-nodes-base.`. For example, `n8n-nodes-base.openweatherapi`. |
| `nodeVersion` | The node version. This should have the same value as the `version` parameter in your main node file. For example, `"1.0"`. |
| `codexVersion` | The codex file version. The current version is `"1.0"`. |
| `categories` | The settings in the `categories` array determine which category n8n adds your node to in the GUI. See [Node categories](#node-categories) for more information. |
| `resources` | The `resources` object contains links to your node documentation. n8n automatically adds help links to credentials and nodes in the GUI. |

## Node categories [\#](\#node-categories "Permanent link")

You can define one or more categories in your node configuration JSON. This helps n8n put the node in the correct category in the nodes panel.

Choose from these categories:

- Data & Storage
- Finance & Accounting
- Marketing & Content
- Productivity
- Miscellaneous
- Sales
- Development
- Analytics
- Communication
- Utility

You must match the syntax. For example, `Data & Storage` not `data and storage`.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/node-codex-files.md "Edit this page")

# Node codex files [\#](\#node-codex-files "Permanent link")

The codex file contains metadata about your node. This file is the JSON file at the root of your node. For example, the [`HttpBin.node.json`](https://github.com/n8n-io/n8n-nodes-starter/blob/master/nodes/HttpBin/HttpBin.node.json) file in the n8n starter.

The codex filename must match the node base filename. For example, given a node base file named `MyNode.node.ts`, the codex would be named `MyNode.node.json`.

| Parameter | Description |
| --- | --- |
| `node` | Includes the node name. Must start with `n8n-nodes-base.`. For example, `n8n-nodes-base.openweatherapi`. |
| `nodeVersion` | The node version. This should have the same value as the `version` parameter in your main node file. For example, `"1.0"`. |
| `codexVersion` | The codex file version. The current version is `"1.0"`. |
| `categories` | The settings in the `categories` array determine which category n8n adds your node to in the GUI. See [Node categories](#node-categories) for more information. |
| `resources` | The `resources` object contains links to your node documentation. n8n automatically adds help links to credentials and nodes in the GUI. |

## Node categories [\#](\#node-categories "Permanent link")

You can define one or more categories in your node configuration JSON. This helps n8n put the node in the correct category in the nodes panel.

Choose from these categories:

- Data & Storage
- Finance & Accounting
- Marketing & Content
- Productivity
- Miscellaneous
- Sales
- Development
- Analytics
- Communication
- Utility

You must match the syntax. For example, `Data & Storage` not `data and storage`.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Verification guidelines | n8n Docs Community node verification guidelines#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/verification-guidelines.md "Edit this page")

# Community node verification guidelines [\#](\#community-node-verification-guidelines "Permanent link")

Do you want n8n to verify your node?

Consider following these guidelines while building your node if you want to submit it for verification by n8n. Any user with verified community nodes enabled can discover and install verified nodes from n8n's nodes panel across all deployment types (self-hosted and n8n Cloud).

## Use the n8n-node tool [\#](\#use-the-n8n-node-tool "Permanent link")

All verified community node authors should strongly consider using the [`n8n-node` tool](../../n8n-node/) to create and check their package. This helps n8n ensure quality and consistency by:

- Generating the expected package file structure
- Adding the required metadata and configuration to the `package.json` file
- Making it easy to lint your code against n8n's standards
- Allowing you to load your node in a local n8n instance for testing

## Package source verification [\#](\#package-source-verification "Permanent link")

- Verify that your npm package repository URL matches the expected GitHub (or other platform) repository.
- Confirm that the package author / maintainer matches between npm and the repository.
- Confirm that the git link in npm works and that the repository is public.
- Make sure your package has proper documentation (README, usage examples, etc.).
- Make sure your package license is MIT.

## No external dependencies [\#](\#no-external-dependencies "Permanent link")

- Ensure that your package does **not** include any external dependencies to keep it lightweight and easy to maintain.

## Proper documentation [\#](\#proper-documentation "Permanent link")

- Provide clear documentation, whether it’s a **README** on GitHub or links to relevant **API documentation**.
- Include usage instructions, example workflows, and any necessary authentication details.

## No access to environment variables or file system [\#](\#no-access-to-environment-variables-or-file-system "Permanent link")

- The code **must not** interact with environment variables or attempt to read/write files.
- Pass all necessary data through node parameters.

## Follow n8n best practices [\#](\#follow-n8n-best-practices "Permanent link")

- Maintain a clear and consistent coding style.
- Use **TypeScript** and follow n8n's [**node development guidelines**](../../../overview/).
- Ensure proper error handling and validation.
- Make sure the linter passes (in other words, make sure running `npx @n8n/scan-community-package n8n-nodes-PACKAGE` passes).

## Use English language only [\#](\#use-english-language-only "Permanent link")

- Both the node interface and all documentation must be in **English** only.
- This includes parameter names, descriptions, help text, error messages and **README** content.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/build/reference/verification-guidelines.md "Edit this page")

# Community node verification guidelines [\#](\#community-node-verification-guidelines "Permanent link")

Do you want n8n to verify your node?

Consider following these guidelines while building your node if you want to submit it for verification by n8n. Any user with verified community nodes enabled can discover and install verified nodes from n8n's nodes panel across all deployment types (self-hosted and n8n Cloud).

## Use the n8n-node tool [\#](\#use-the-n8n-node-tool "Permanent link")

All verified community node authors should strongly consider using the [`n8n-node` tool](../../n8n-node/) to create and check their package. This helps n8n ensure quality and consistency by:

- Generating the expected package file structure
- Adding the required metadata and configuration to the `package.json` file
- Making it easy to lint your code against n8n's standards
- Allowing you to load your node in a local n8n instance for testing

## Package source verification [\#](\#package-source-verification "Permanent link")

- Verify that your npm package repository URL matches the expected GitHub (or other platform) repository.
- Confirm that the package author / maintainer matches between npm and the repository.
- Confirm that the git link in npm works and that the repository is public.
- Make sure your package has proper documentation (README, usage examples, etc.).
- Make sure your package license is MIT.

## No external dependencies [\#](\#no-external-dependencies "Permanent link")

- Ensure that your package does **not** include any external dependencies to keep it lightweight and easy to maintain.

## Proper documentation [\#](\#proper-documentation "Permanent link")

- Provide clear documentation, whether it’s a **README** on GitHub or links to relevant **API documentation**.
- Include usage instructions, example workflows, and any necessary authentication details.

## No access to environment variables or file system [\#](\#no-access-to-environment-variables-or-file-system "Permanent link")

- The code **must not** interact with environment variables or attempt to read/write files.
- Pass all necessary data through node parameters.

## Follow n8n best practices [\#](\#follow-n8n-best-practices "Permanent link")

- Maintain a clear and consistent coding style.
- Use **TypeScript** and follow n8n's [**node development guidelines**](../../../overview/).
- Ensure proper error handling and validation.
- Make sure the linter passes (in other words, make sure running `npx @n8n/scan-community-package n8n-nodes-PACKAGE` passes).

## Use English language only [\#](\#use-english-language-only "Permanent link")

- Both the node interface and all documentation must be in **English** only.
- This includes parameter names, descriptions, help text, error messages and **README** content.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Install private nodes | n8n Docs Install private nodes#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/deploy/install-private-nodes.md "Edit this page")

# Install private nodes [\#](\#install-private-nodes "Permanent link")

You can build your own nodes and install them in your n8n instance without publishing them on npm. This is useful for nodes that you create for internal use only at your company.

## Install your node in a Docker n8n instance [\#](\#install-your-node-in-a-docker-n8n-instance "Permanent link")

If you're running n8n using Docker, you need to create a Docker image with the node installed in n8n.

1. Create a Dockerfile and paste the code from [this Dockerfile](https://github.com/n8n-io/n8n/blob/master/docker/images/n8n/Dockerfile).

Your Dockerfile should look like this:

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>``` | ```<br>FROM node:16-alpine<br>ARG N8N_VERSION<br>RUN if [ -z "$N8N_VERSION" ] ; then echo "The N8N_VERSION argument is missing!" ; exit 1; fi<br># Update everything and install needed dependencies<br>RUN apk add --update graphicsmagick tzdata git tini su-exec<br># Set a custom user to not have n8n run as root<br>USER root<br># Install n8n and the packages it needs to build it correctly.<br>RUN apk --update add --virtual build-dependencies python3 build-base ca-certificates && \<br>	npm config set python "$(which python3)" && \<br>	npm_config_user=root npm install -g full-icu n8n@${N8N_VERSION} && \<br>	apk del build-dependencies \<br>	&& rm -rf /root /tmp/* /var/cache/apk/* && mkdir /root;<br># Install fonts<br>RUN apk --no-cache add --virtual fonts msttcorefonts-installer fontconfig && \<br>	update-ms-fonts && \<br>	fc-cache -f && \<br>	apk del fonts && \<br>	find  /usr/share/fonts/truetype/msttcorefonts/ -type l -exec unlink {} \; \<br>	&& rm -rf /root /tmp/* /var/cache/apk/* && mkdir /root<br>ENV NODE_ICU_DATA /usr/local/lib/node_modules/full-icu<br>WORKDIR /data<br>COPY docker-entrypoint.sh /docker-entrypoint.sh<br>ENTRYPOINT ["tini", "--", "/docker-entrypoint.sh"]<br>EXPOSE 5678/tcp<br>``` |

2. Compile your custom node code ( `npm run build` if you are using nodes starter). Copy the **node** and **credential** folders from within the **dist** folder into your container's `~/.n8n/custom/` directory. This makes them available to Docker.

3. Download the [docker-entrypoint.sh](https://github.com/n8n-io/n8n/blob/master/docker/images/n8n/docker-entrypoint.sh) file, and place it in the same directory as your Dockerfile.

4. Build your Docker image:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```<br># Replace <n8n-version-number> with the n8n release version number. <br># For example, N8N_VERSION=0.177.0<br>docker build --build-arg N8N_VERSION=<n8n-version-number> --tag=customizedn8n .<br>``` |

You can now use your node in Docker.

## Install your node in a global n8n instance [\#](\#install-your-node-in-a-global-n8n-instance "Permanent link")

If you've installed n8n globally, make sure that you install your node inside n8n. n8n will find the module and load it automatically.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/deploy/install-private-nodes.md "Edit this page")

# Install private nodes [\#](\#install-private-nodes "Permanent link")

You can build your own nodes and install them in your n8n instance without publishing them on npm. This is useful for nodes that you create for internal use only at your company.

## Install your node in a Docker n8n instance [\#](\#install-your-node-in-a-docker-n8n-instance "Permanent link")

If you're running n8n using Docker, you need to create a Docker image with the node installed in n8n.

1. Create a Dockerfile and paste the code from [this Dockerfile](https://github.com/n8n-io/n8n/blob/master/docker/images/n8n/Dockerfile).

   Your Dockerfile should look like this:

   |     |     |
   | --- | --- |
   | ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>``` | ```<br>FROM node:16-alpine<br>ARG N8N_VERSION<br>RUN if [ -z "$N8N_VERSION" ] ; then echo "The N8N_VERSION argument is missing!" ; exit 1; fi<br># Update everything and install needed dependencies<br>RUN apk add --update graphicsmagick tzdata git tini su-exec<br># Set a custom user to not have n8n run as root<br>USER root<br># Install n8n and the packages it needs to build it correctly.<br>RUN apk --update add --virtual build-dependencies python3 build-base ca-certificates && \<br>	npm config set python "$(which python3)" && \<br>	npm_config_user=root npm install -g full-icu n8n@${N8N_VERSION} && \<br>	apk del build-dependencies \<br>	&& rm -rf /root /tmp/* /var/cache/apk/* && mkdir /root;<br># Install fonts<br>RUN apk --no-cache add --virtual fonts msttcorefonts-installer fontconfig && \<br>	update-ms-fonts && \<br>	fc-cache -f && \<br>	apk del fonts && \<br>	find  /usr/share/fonts/truetype/msttcorefonts/ -type l -exec unlink {} \; \<br>	&& rm -rf /root /tmp/* /var/cache/apk/* && mkdir /root<br>ENV NODE_ICU_DATA /usr/local/lib/node_modules/full-icu<br>WORKDIR /data<br>COPY docker-entrypoint.sh /docker-entrypoint.sh<br>ENTRYPOINT ["tini", "--", "/docker-entrypoint.sh"]<br>EXPOSE 5678/tcp<br>``` |

2. Compile your custom node code ( `npm run build` if you are using nodes starter). Copy the **node** and **credential** folders from within the **dist** folder into your container's `~/.n8n/custom/` directory. This makes them available to Docker.

3. Download the [docker-entrypoint.sh](https://github.com/n8n-io/n8n/blob/master/docker/images/n8n/docker-entrypoint.sh) file, and place it in the same directory as your Dockerfile.

4. Build your Docker image:

   |     |     |
   | --- | --- |
   | ```<br>1<br>2<br>3<br>``` | ```<br># Replace <n8n-version-number> with the n8n release version number. <br># For example, N8N_VERSION=0.177.0<br>docker build --build-arg N8N_VERSION=<n8n-version-number> --tag=customizedn8n .<br>``` |

You can now use your node in Docker.

## Install your node in a global n8n instance [\#](\#install-your-node-in-a-global-n8n-instance "Permanent link")

If you've installed n8n globally, make sure that you install your node inside n8n. n8n will find the module and load it automatically.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Submit community nodes | n8n Docs Submit community nodes#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/deploy/submit-community-nodes.md "Edit this page")

# Submit community nodes [\#](\#submit-community-nodes "Permanent link")

Community nodes are npm packages, hosted in the npm registry.

When building a node to submit to the community node repository, use the following resources to make sure your node setup is correct:

- n8n recommends using the [`n8n-node` CLI tool](../../build/n8n-node/) to build and test your node. In particular, this is important if you plan on [submitting your node for verification](./#submit-your-node-for-verification-by-n8n). This ensures that your node has the correct structure and follows community node requirements. It also simplifies linting and testing.
- View [n8n's own nodes](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes) for examples of patterns you can use in your nodes.
- Refer to the documentation on [building your own nodes](../../overview/).
- Make sure your node follows the [standards](#standards) for community nodes.

## Standards [\#](\#standards "Permanent link")

Developing with the [`n8n-node` tool](../../build/n8n-node/) ensures that your node adheres to the following standards required to make your node available in the n8n community node repository:

- Make sure the package name starts with `n8n-nodes-` or `@<scope>/n8n-nodes-`. For example, `n8n-nodes-weather` or `@weatherPlugins/n8n-nodes-weather`.
- Include `n8n-community-node-package` in your package keywords.
- Make sure that you add your nodes and credentials to the `package.json` file inside the `n8n` attribute.
- Check your node using the linter ( `npm run lint`) and test it locally ( `npm run dev`) to ensure it works.
- Submit the package to the npm registry. Refer to npm's documentation on [Contributing packages to the registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) for more information.

## Submit your node for verification by n8n [\#](\#submit-your-node-for-verification-by-n8n "Permanent link")

n8n vets verified community nodes. Users can discover and install verified community nodes from the nodes panel in n8n. These nodes need to adhere to certain technical and UX standards and constraints.

Before submitting your node for review by n8n, you must:

- Start from the [`n8n-node` tool](../../build/n8n-node/) generated scaffolding. While this isn't strictly required, n8n strongly suggests using the `n8n-node` CLI tool for any community node you plan to submit for verification. Using the tool ensures that your node follows the expected conventions and adheres to the community node requirements.
- Make sure that your node follows the [technical guidelines for verified community nodes](../../build/reference/verification-guidelines/) and that all automated checks pass. Specifically, verified community nodes aren't allowed to use any run-time dependencies.
- Ensure that your node follows the [UX guidelines](../../build/reference/ux-guidelines/).
- Make sure that the node has appropriate documentation in the form of a README in the [npm package](https://docs.npmjs.com/about-package-readme-files) or a related public repository.
- Submit your node to npm as n8n will fetch it from there for final vetting.

Ready to submit?

If your node meets all the above requirements, sign up or log in to the [n8n Creator Portal](https://creators.n8n.io/nodes) and submit your node for verification. Note that n8n reserves the right to reject nodes that compete with any of n8n's paid features, especially enterprise functionality.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/deploy/submit-community-nodes.md "Edit this page")

# Submit community nodes [\#](\#submit-community-nodes "Permanent link")

Community nodes are npm packages, hosted in the npm registry.

When building a node to submit to the community node repository, use the following resources to make sure your node setup is correct:

- n8n recommends using the [`n8n-node` CLI tool](../../build/n8n-node/) to build and test your node. In particular, this is important if you plan on [submitting your node for verification](./#submit-your-node-for-verification-by-n8n). This ensures that your node has the correct structure and follows community node requirements. It also simplifies linting and testing.
- View [n8n's own nodes](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/nodes) for examples of patterns you can use in your nodes.
- Refer to the documentation on [building your own nodes](../../overview/).
- Make sure your node follows the [standards](#standards) for community nodes.

## Standards [\#](\#standards "Permanent link")

Developing with the [`n8n-node` tool](../../build/n8n-node/) ensures that your node adheres to the following standards required to make your node available in the n8n community node repository:

- Make sure the package name starts with `n8n-nodes-` or `@<scope>/n8n-nodes-`. For example, `n8n-nodes-weather` or `@weatherPlugins/n8n-nodes-weather`.
- Include `n8n-community-node-package` in your package keywords.
- Make sure that you add your nodes and credentials to the `package.json` file inside the `n8n` attribute.
- Check your node using the linter ( `npm run lint`) and test it locally ( `npm run dev`) to ensure it works.
- Submit the package to the npm registry. Refer to npm's documentation on [Contributing packages to the registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) for more information.

## Submit your node for verification by n8n [\#](\#submit-your-node-for-verification-by-n8n "Permanent link")

n8n vets verified community nodes. Users can discover and install verified community nodes from the nodes panel in n8n. These nodes need to adhere to certain technical and UX standards and constraints.

Before submitting your node for review by n8n, you must:

- Start from the [`n8n-node` tool](../../build/n8n-node/) generated scaffolding. While this isn't strictly required, n8n strongly suggests using the `n8n-node` CLI tool for any community node you plan to submit for verification. Using the tool ensures that your node follows the expected conventions and adheres to the community node requirements.
- Make sure that your node follows the [technical guidelines for verified community nodes](../../build/reference/verification-guidelines/) and that all automated checks pass. Specifically, verified community nodes aren't allowed to use any run-time dependencies.
- Ensure that your node follows the [UX guidelines](../../build/reference/ux-guidelines/).
- Make sure that the node has appropriate documentation in the form of a README in the [npm package](https://docs.npmjs.com/about-package-readme-files) or a related public repository.
- Submit your node to npm as n8n will fetch it from there for final vetting.

Ready to submit?

If your node meets all the above requirements, sign up or log in to the [n8n Creator Portal](https://creators.n8n.io/nodes) and submit your node for verification. Note that n8n reserves the right to reject nodes that compete with any of n8n's paid features, especially enterprise functionality.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Node UI design | n8n Docs Design your node's user interface#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/plan/node-ui-design.md "Edit this page")

# Design your node's user interface [\#](\#design-your-nodes-user-interface "Permanent link")

Most nodes are a GUI (graphical user interface) representation of an API. Designing the interface means finding a user-friendly way to represent API endpoints and parameters. Directly translating an entire API into form fields in a node may not result in a good user experience.

This document provides design guidance and standards to follow. These guidelines are the same as those used by n8n. This helps provide a smooth and consistent user experience for users mixing community and built-in nodes.

## Design guidance [\#](\#design-guidance "Permanent link")

All node's use n8n's [node UI elements](../../build/reference/ui-elements/), so you don't need to consider style details such as colors, borders, and so on. However, it's still useful to go through a basic design process:

- Review the documentation for the API you're integrating. Ask yourself:
  - What can you leave out?
  - What can you simplify?
  - Which parts of the API are confusing? How can you help users understand them?
- Use a wireframe tool to try out your field layout. If you find your node has a lot of fields and is getting confusing, consider n8n's guidance on [showing and hiding fields](#showing-and-hiding-fields).

## Standards [\#](\#standards "Permanent link")

### UI text style [\#](\#ui-text-style "Permanent link")

| Element | Style |
| --- | --- |
| Drop-down value | Title case |
| Hint | Sentence case |
| Info box | Sentence case. Don't use a period ( `.`) for one-sentence information. Always use a period if there's more than one sentence. This field can include links, which should open in a new tab. |
| Node name | Title case |
| Parameter name | Title case |
| Subtitle | Title case |
| Tooltip | Sentence case. Don't use a period ( `.`) for one-sentence tooltips. Always use a period if there's more than one sentence. This field can include links, which should open in a new tab. |

### UI text terminology [\#](\#ui-text-terminology "Permanent link")

- Use the same terminology as the service the node connects to. For example, a Notion node should refer to Notion blocks, not Notion paragraphs, because Notion calls these elements blocks. There are exceptions to this rule, usually to avoid technical terms (for example, refer to the guidance on [name and description for upsert operations](#upsert-operations)).
- Sometimes a service has different terms for something in its API and in its GUI. Use the GUI language in your node, as this is what most users are familiar with. If you think some users may need to refer to the service's API docs, consider including this information in a hint.
- Don't use technical jargon when there are simpler alternatives.
- Be consistent when naming things. For example, choose one of `directory` or `folder` then stick to it.

### Node naming conventions [\#](\#node-naming-conventions "Permanent link")

| Convention | Correct | Incorrect |
| --- | --- | --- |
| If a node is a trigger node, <br>the displayed name should have 'Trigger' at the end, <br>with a space before. | Shopify Trigger | ShopifyTrigger, Shopify trigger |
| Don't include 'node' in the name. | Asana | Asana Node, Asana node |

### Showing and hiding fields [\#](\#showing-and-hiding-fields "Permanent link")

Fields can either be:

- Displayed when the node opens: use this for resources and operations, and required fields.
- Hidden in the **Optional fields** section until a user clicks on that section: use this for optional fields.

Progressively disclose complexity: hide a field until any earlier fields it depends on have values. For example, if you have a **Filter by date** toggle, and a **Date to filter by** datepicker, don't display **Date to filter by** until the user enables **Filter by date**.

### Conventions by field type [\#](\#conventions-by-field-type "Permanent link")

#### Credentials [\#](\#credentials "Permanent link")

n8n automatically displays credential fields as the top fields in the node.

#### Resources and operations [\#](\#resources-and-operations "Permanent link")

APIs usually involve doing something to data. For example, "get all tasks." In this example, "task" is the resource, and "get all" is the operation.

When your node has this resource and operation pattern, your first field should be **Resource**, and your second field should be **Operation**.

#### Required fields [\#](\#required-fields "Permanent link")

Order fields by:

- Most important to least important.
- Scope: from broad to narrow. For example, you have fields for **Document**, **Page**, and **Text to insert**, put them in that order.

#### Optional fields [\#](\#optional-fields "Permanent link")

- Order fields alphabetically. To group similar things together, you can rename them. For example, rename **Email** and **Secondary Email** to **Email (primary)** and **Email (secondary)**.
- If an optional field has a default value that the node uses when the value isn't set, load the field with that value. Explain this in the field description. For example, **Defaults to false**.
- Connected fields: if one optional fields is dependent on another, bundle them together. They should both be under a single option that shows both fields when selected.
- If you have a lot of optional fields, consider grouping them by theme.

#### Help [\#](\#help "Permanent link")

There are five types of help built in to the GUI:

- Info boxes: yellow boxes that appear between fields. Refer to [UI elements \| Notice](../../build/reference/ui-elements/#notice) for more information.
- Use info boxes for essential information. Don't over-use them. By making them rare, they stand out more and grab the user's attention.
- Parameter hints: lines of text displayed beneath a user input field. Use this when there's something the user needs to know, but an info box would be excessive.
- Node hints: provide help in the input panel, output panel, or node details view. Refer to [UI elements \| Hints](../../build/reference/ui-elements/#hints) for more information.
- Tooltips: callouts that appear when the user hovers over the tooltip icon !["Screenshot of the tooltip icon. The icon is a ? in a grey circle"](../../../../_images/common-icons/help-tooltip.png). Use tooltips for extra information that the user might need.
- You don't have to provide a tooltip for every field. Only add one if it contains useful information.
- When writing tooltips, think about what the user needs. Don't just copy-paste API parameter descriptions. If the description doesn't make sense, or has errors, improve it.
- Placeholder text: n8n can display placeholder text in a field where the user hasn't entered a value. This can help the user know what's expected in that field.

Info boxes, hints, and tooltips can contain links to more information.

#### Errors [\#](\#errors "Permanent link")

Make it clear which fields are required.

Add validation rules to fields if possible. For example, check for valid email patterns if the field expects an email.

When displaying errors, make sure only the main error message displays in the red error title. More information should go in **Details**.

Refer to [Node Error Handling](../../build/reference/error-handling/) for more information.

#### Toggles [\#](\#toggles "Permanent link")

- Tooltips for binary states should start with something like **Whether to . . .**.
- You may need a list rather than a toggle:
  - Use toggles when it's clear what happens in a false state. For example, **Simplify Output?**. The alternative (don't simplify output) is clear.
  - Use a dropdown list with named options when you need more clarity. For example, **Append?**. What happens if you don't append is unclear (it could be that nothing happens, or information is overwritten, or discarded).

#### Lists [\#](\#lists "Permanent link")

- Set default values for lists whenever possible. The default should be the most-used option.
- Sort list options alphabetically.
- You can include list option descriptions. Only add descriptions if they provide useful information.
- If there is an option like **All**, use the word **All**, not shorthand like **\***.

#### Trigger node inputs [\#](\#trigger-node-inputs "Permanent link")

When a trigger node has a parameter for specifying which events to trigger on:

- Name the parameter **Trigger on**.
- Don't include a tooltip.

#### Subtitles [\#](\#subtitles "Permanent link")

Set subtitles based on the values of the main parameters. For example:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',<br>``` |

#### IDs [\#](\#ids "Permanent link")

When performing an operation on a specific record, such as "update a task comment" you need a way to specify which record you want to change.

- Wherever possible, provide two ways to specify a record:
  - By choosing from a pre-populated list. You can generate this list using the `loadOptions` parameter. Refer to [Base files](../../build/reference/node-base-files/) for more information.
  - By entering an ID.
- Name the field `<Record name> name or ID`. For example, **Workspace Name or ID**. Add a tooltip saying "Choose a name from the list, or specify an ID using an expression." Link to n8n's [Expressions](../../../../code/expressions/) documentation.
- Build your node so that it can handle users providing more information than required. For example:
  - If you need a relative path, handle the user pasting in the absolute path.
  - If the user needs to get an ID from a URL, handle the user pasting in the entire URL.

#### Dates and timestamps [\#](\#dates-and-timestamps "Permanent link")

n8n uses [ISO timestamp strings](https://en.wikipedia.org/wiki/ISO_8601) for dates and times. Make sure that any date or timestamp field you add supports all ISO 8601 formats.

#### JSON [\#](\#json "Permanent link")

You should support two ways of specifying the content of a text input that expects JSON:

- Typing JSON directly into the text input: you need to parse the resulting string into a JSON object.
- Using an expression that returns JSON.

#### Node icons [\#](\#node-icons "Permanent link")

### Common patterns and exceptions [\#](\#common-patterns-and-exceptions "Permanent link")

This section provides guidance on handling common design patterns, including some edge cases and exceptions to the main standards.

#### Simplify responses [\#](\#simplify-responses "Permanent link")

APIs can return a lot of data that isn't useful. Consider adding a toggle that allows users to choose to simplify the response data:

- Name: **Simplify Response**
- Description: **Whether to return a simplified version of the response instead of the raw data**

#### Upsert operations [\#](\#upsert-operations "Permanent link")

This should always be a separate operation with:

- Name: **Create or Update**
- Description: **Create a new record, or update the current one if it already exists (upsert)**

#### Boolean operators [\#](\#boolean-operators "Permanent link")

n8n doesn't have good support for combining boolean operators, such as AND and OR, in the GUI. Whenever possible, provide options for all ANDs or all ORs.

For example, you have a field called **Must match** to test if values match. Include options to test for **Any** and **All**, as separate options.

#### Source keys or binary properties [\#](\#source-keys-or-binary-properties "Permanent link")

Binary data is file data, such as spreadsheets or images. In n8n, you need a named key to reference the data. Don't use the terms "binary data" or "binary property" for this field. Instead, use a more descriptive name: **Input data field name** / **Output data field name**.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/plan/node-ui-design.md "Edit this page")

# Design your node's user interface [\#](\#design-your-nodes-user-interface "Permanent link")

Most nodes are a GUI (graphical user interface) representation of an API. Designing the interface means finding a user-friendly way to represent API endpoints and parameters. Directly translating an entire API into form fields in a node may not result in a good user experience.

This document provides design guidance and standards to follow. These guidelines are the same as those used by n8n. This helps provide a smooth and consistent user experience for users mixing community and built-in nodes.

## Design guidance [\#](\#design-guidance "Permanent link")

All node's use n8n's [node UI elements](../../build/reference/ui-elements/), so you don't need to consider style details such as colors, borders, and so on. However, it's still useful to go through a basic design process:

- Review the documentation for the API you're integrating. Ask yourself:
  - What can you leave out?
  - What can you simplify?
  - Which parts of the API are confusing? How can you help users understand them?
- Use a wireframe tool to try out your field layout. If you find your node has a lot of fields and is getting confusing, consider n8n's guidance on [showing and hiding fields](#showing-and-hiding-fields).

## Standards [\#](\#standards "Permanent link")

### UI text style [\#](\#ui-text-style "Permanent link")

| Element | Style |
| --- | --- |
| Drop-down value | Title case |
| Hint | Sentence case |
| Info box | Sentence case. Don't use a period ( `.`) for one-sentence information. Always use a period if there's more than one sentence. This field can include links, which should open in a new tab. |
| Node name | Title case |
| Parameter name | Title case |
| Subtitle | Title case |
| Tooltip | Sentence case. Don't use a period ( `.`) for one-sentence tooltips. Always use a period if there's more than one sentence. This field can include links, which should open in a new tab. |

### UI text terminology [\#](\#ui-text-terminology "Permanent link")

- Use the same terminology as the service the node connects to. For example, a Notion node should refer to Notion blocks, not Notion paragraphs, because Notion calls these elements blocks. There are exceptions to this rule, usually to avoid technical terms (for example, refer to the guidance on [name and description for upsert operations](#upsert-operations)).
- Sometimes a service has different terms for something in its API and in its GUI. Use the GUI language in your node, as this is what most users are familiar with. If you think some users may need to refer to the service's API docs, consider including this information in a hint.
- Don't use technical jargon when there are simpler alternatives.
- Be consistent when naming things. For example, choose one of `directory` or `folder` then stick to it.

### Node naming conventions [\#](\#node-naming-conventions "Permanent link")

| Convention | Correct | Incorrect |
| --- | --- | --- |
| If a node is a trigger node, <br>the displayed name should have 'Trigger' at the end, <br>with a space before. | Shopify Trigger | ShopifyTrigger, Shopify trigger |
| Don't include 'node' in the name. | Asana | Asana Node, Asana node |

### Showing and hiding fields [\#](\#showing-and-hiding-fields "Permanent link")

Fields can either be:

- Displayed when the node opens: use this for resources and operations, and required fields.
- Hidden in the **Optional fields** section until a user clicks on that section: use this for optional fields.

Progressively disclose complexity: hide a field until any earlier fields it depends on have values. For example, if you have a **Filter by date** toggle, and a **Date to filter by** datepicker, don't display **Date to filter by** until the user enables **Filter by date**.

### Conventions by field type [\#](\#conventions-by-field-type "Permanent link")

#### Credentials [\#](\#credentials "Permanent link")

n8n automatically displays credential fields as the top fields in the node.

#### Resources and operations [\#](\#resources-and-operations "Permanent link")

APIs usually involve doing something to data. For example, "get all tasks." In this example, "task" is the resource, and "get all" is the operation.

When your node has this resource and operation pattern, your first field should be **Resource**, and your second field should be **Operation**.

#### Required fields [\#](\#required-fields "Permanent link")

Order fields by:

- Most important to least important.
- Scope: from broad to narrow. For example, you have fields for **Document**, **Page**, and **Text to insert**, put them in that order.

#### Optional fields [\#](\#optional-fields "Permanent link")

- Order fields alphabetically. To group similar things together, you can rename them. For example, rename **Email** and **Secondary Email** to **Email (primary)** and **Email (secondary)**.
- If an optional field has a default value that the node uses when the value isn't set, load the field with that value. Explain this in the field description. For example, **Defaults to false**.
- Connected fields: if one optional fields is dependent on another, bundle them together. They should both be under a single option that shows both fields when selected.
- If you have a lot of optional fields, consider grouping them by theme.

#### Help [\#](\#help "Permanent link")

There are five types of help built in to the GUI:

- Info boxes: yellow boxes that appear between fields. Refer to [UI elements \| Notice](../../build/reference/ui-elements/#notice) for more information.
- Use info boxes for essential information. Don't over-use them. By making them rare, they stand out more and grab the user's attention.
- Parameter hints: lines of text displayed beneath a user input field. Use this when there's something the user needs to know, but an info box would be excessive.
- Node hints: provide help in the input panel, output panel, or node details view. Refer to [UI elements \| Hints](../../build/reference/ui-elements/#hints) for more information.
- Tooltips: callouts that appear when the user hovers over the tooltip icon !["Screenshot of the tooltip icon. The icon is a ? in a grey circle"](../../../../_images/common-icons/help-tooltip.png). Use tooltips for extra information that the user might need.
- You don't have to provide a tooltip for every field. Only add one if it contains useful information.
- When writing tooltips, think about what the user needs. Don't just copy-paste API parameter descriptions. If the description doesn't make sense, or has errors, improve it.
- Placeholder text: n8n can display placeholder text in a field where the user hasn't entered a value. This can help the user know what's expected in that field.

Info boxes, hints, and tooltips can contain links to more information.

#### Errors [\#](\#errors "Permanent link")

Make it clear which fields are required.

Add validation rules to fields if possible. For example, check for valid email patterns if the field expects an email.

When displaying errors, make sure only the main error message displays in the red error title. More information should go in **Details**.

Refer to [Node Error Handling](../../build/reference/error-handling/) for more information.

#### Toggles [\#](\#toggles "Permanent link")

- Tooltips for binary states should start with something like **Whether to . . .**.
- You may need a list rather than a toggle:
  - Use toggles when it's clear what happens in a false state. For example, **Simplify Output?**. The alternative (don't simplify output) is clear.
  - Use a dropdown list with named options when you need more clarity. For example, **Append?**. What happens if you don't append is unclear (it could be that nothing happens, or information is overwritten, or discarded).

#### Lists [\#](\#lists "Permanent link")

- Set default values for lists whenever possible. The default should be the most-used option.
- Sort list options alphabetically.
- You can include list option descriptions. Only add descriptions if they provide useful information.
- If there is an option like **All**, use the word **All**, not shorthand like **\***.

#### Trigger node inputs [\#](\#trigger-node-inputs "Permanent link")

When a trigger node has a parameter for specifying which events to trigger on:

- Name the parameter **Trigger on**.
- Don't include a tooltip.

#### Subtitles [\#](\#subtitles "Permanent link")

Set subtitles based on the values of the main parameters. For example:

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```<br>subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',<br>``` |

#### IDs [\#](\#ids "Permanent link")

When performing an operation on a specific record, such as "update a task comment" you need a way to specify which record you want to change.

- Wherever possible, provide two ways to specify a record:
  - By choosing from a pre-populated list. You can generate this list using the `loadOptions` parameter. Refer to [Base files](../../build/reference/node-base-files/) for more information.
  - By entering an ID.
- Name the field `<Record name> name or ID`. For example, **Workspace Name or ID**. Add a tooltip saying "Choose a name from the list, or specify an ID using an expression." Link to n8n's [Expressions](../../../../code/expressions/) documentation.
- Build your node so that it can handle users providing more information than required. For example:
  - If you need a relative path, handle the user pasting in the absolute path.
  - If the user needs to get an ID from a URL, handle the user pasting in the entire URL.

#### Dates and timestamps [\#](\#dates-and-timestamps "Permanent link")

n8n uses [ISO timestamp strings](https://en.wikipedia.org/wiki/ISO_8601) for dates and times. Make sure that any date or timestamp field you add supports all ISO 8601 formats.

#### JSON [\#](\#json "Permanent link")

You should support two ways of specifying the content of a text input that expects JSON:

- Typing JSON directly into the text input: you need to parse the resulting string into a JSON object.
- Using an expression that returns JSON.

#### Node icons [\#](\#node-icons "Permanent link")

### Common patterns and exceptions [\#](\#common-patterns-and-exceptions "Permanent link")

This section provides guidance on handling common design patterns, including some edge cases and exceptions to the main standards.

#### Simplify responses [\#](\#simplify-responses "Permanent link")

APIs can return a lot of data that isn't useful. Consider adding a toggle that allows users to choose to simplify the response data:

- Name: **Simplify Response**
- Description: **Whether to return a simplified version of the response instead of the raw data**

#### Upsert operations [\#](\#upsert-operations "Permanent link")

This should always be a separate operation with:

- Name: **Create or Update**
- Description: **Create a new record, or update the current one if it already exists (upsert)**

#### Boolean operators [\#](\#boolean-operators "Permanent link")

n8n doesn't have good support for combining boolean operators, such as AND and OR, in the GUI. Whenever possible, provide options for all ANDs or all ORs.

For example, you have a field called **Must match** to test if values match. Include options to test for **Any** and **All**, as separate options.

#### Source keys or binary properties [\#](\#source-keys-or-binary-properties "Permanent link")

Binary data is file data, such as spreadsheets or images. In n8n, you need a named key to reference the data. Don't use the terms "binary data" or "binary property" for this field. Instead, use a more descriptive name: **Input data field name** / **Output data field name**.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Node linter | n8n Docs n8n node linter#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/test/node-linter.md "Edit this page")

# n8n node linter [\#](\#n8n-node-linter "Permanent link")

n8n's node linter, [`eslint-plugin-n8n-nodes-base`](https://github.com/ivov/eslint-plugin-n8n-nodes-base), statically analyzes ("lints") the source code of n8n nodes and credentials in the official repository and in community packages. The linter detects issues and automatically fixes them to help you follow best practices.

`eslint-plugin-n8n-nodes-base` contains a [collection of rules](https://github.com/ivov/eslint-plugin-n8n-nodes-base#ruleset) for node files ( `*.node.ts`), resource description files ( `*Description.ts`), credential files ( `*.credentials.ts`), and the `package.json` of a community package.

## Setup [\#](\#setup "Permanent link")

If using the [n8n node starter](https://github.com/n8n-io/n8n-nodes-starter): Run `npm install` in the starter project to install all dependencies. Once the installation finishes, the linter is available to you.

If using VS Code, install the [ESLint VS Code extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). For other IDEs, refer to their ESLint integrations.

Don't edit the configuration file

[`.eslintrc.js`](https://github.com/n8n-io/n8n-nodes-starter/blob/master/.eslintrc.js) contains the configuration for `eslint-plugin-n8n-nodes-base`. Don't edit this file.

## Usage [\#](\#usage "Permanent link")

You can use the linter in a community package or in the main n8n repository.

### Linting [\#](\#linting "Permanent link")

In a community package, the linter runs automatically after installing dependencies and before publishing the package to npm. In the [main n8n repository](https://github.com/n8n-io/n8n), the linter runs automatically using GitHub Actions whenever you push to your pull request.

In both cases, VS Code lints in the background as you work on your project. Hover over a detected issue to see a full description of the linting and a link to further information.

You can also run the linter manually:

- Run `npm run lint` to lint and view detected issues in your console.
- Run `npm run lintfix` to lint and automatically fix issues. The linter fixes violations of rules [marked as automatically fixable](https://github.com/ivov/eslint-plugin-n8n-nodes-base#ruleset).

Both commands can run in the root directory of your community package, or in `/packages/nodes-base/` in the main repository.

### Exceptions [\#](\#exceptions "Permanent link")

Instead of fixing a rule violation, you can also make an exception for it, so the linter doesn't flag it.

To make a lint exception from VS Code: hover over the issue and click on `Quick fix` (or `cmd+.` in macOS) and select **Disable {rule} for this line**. Only disable rules for a line where you have good reason to. If you think the linter is incorrectly reporting an issue, please [report it in the linter repository](https://github.com/ivov/eslint-plugin-n8n-nodes-base/issues).

To add a lint exception to a single file, add a code comment. In particular, TSLint rules may not show up in VS Code and may need to be turned off using code comments. Refer to the [TSLint documentation](https://palantir.github.io/tslint/usage/rule-flags/) for more guidance.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/test/node-linter.md "Edit this page")

# n8n node linter [\#](\#n8n-node-linter "Permanent link")

n8n's node linter, [`eslint-plugin-n8n-nodes-base`](https://github.com/ivov/eslint-plugin-n8n-nodes-base), statically analyzes ("lints") the source code of n8n nodes and credentials in the official repository and in community packages. The linter detects issues and automatically fixes them to help you follow best practices.

`eslint-plugin-n8n-nodes-base` contains a [collection of rules](https://github.com/ivov/eslint-plugin-n8n-nodes-base#ruleset) for node files ( `*.node.ts`), resource description files ( `*Description.ts`), credential files ( `*.credentials.ts`), and the `package.json` of a community package.

## Setup [\#](\#setup "Permanent link")

If using the [n8n node starter](https://github.com/n8n-io/n8n-nodes-starter): Run `npm install` in the starter project to install all dependencies. Once the installation finishes, the linter is available to you.

If using VS Code, install the [ESLint VS Code extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). For other IDEs, refer to their ESLint integrations.

Don't edit the configuration file

[`.eslintrc.js`](https://github.com/n8n-io/n8n-nodes-starter/blob/master/.eslintrc.js) contains the configuration for `eslint-plugin-n8n-nodes-base`. Don't edit this file.

## Usage [\#](\#usage "Permanent link")

You can use the linter in a community package or in the main n8n repository.

### Linting [\#](\#linting "Permanent link")

In a community package, the linter runs automatically after installing dependencies and before publishing the package to npm. In the [main n8n repository](https://github.com/n8n-io/n8n), the linter runs automatically using GitHub Actions whenever you push to your pull request.

In both cases, VS Code lints in the background as you work on your project. Hover over a detected issue to see a full description of the linting and a link to further information.

You can also run the linter manually:

- Run `npm run lint` to lint and view detected issues in your console.
- Run `npm run lintfix` to lint and automatically fix issues. The linter fixes violations of rules [marked as automatically fixable](https://github.com/ivov/eslint-plugin-n8n-nodes-base#ruleset).

Both commands can run in the root directory of your community package, or in `/packages/nodes-base/` in the main repository.

### Exceptions [\#](\#exceptions "Permanent link")

Instead of fixing a rule violation, you can also make an exception for it, so the linter doesn't flag it.

To make a lint exception from VS Code: hover over the issue and click on `Quick fix` (or `cmd+.` in macOS) and select **Disable {rule} for this line**. Only disable rules for a line where you have good reason to. If you think the linter is incorrectly reporting an issue, please [report it in the linter repository](https://github.com/ivov/eslint-plugin-n8n-nodes-base/issues).

To add a lint exception to a single file, add a code comment. In particular, TSLint rules may not show up in VS Code and may need to be turned off using code comments. Refer to the [TSLint documentation](https://palantir.github.io/tslint/usage/rule-flags/) for more guidance.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit


---

###### Troubleshooting | n8n Docs Troubleshooting#

[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/test/troubleshooting-node-development.md "Edit this page")

# Troubleshooting [\#](\#troubleshooting "Permanent link")

## Credentials [\#](\#credentials "Permanent link")

### Error message: 'Credentials of type "\*" aren't known' [\#](\#error-message-credentials-of-type-arent-known "Permanent link")

Check that the name in the credentials array matches the name used in the property name of the credentials' class.

![Troubleshooting credentials](../../../../_images/integrations/creating-nodes/troubleshooting-credentials-1.png)

## Editor UI [\#](\#editor-ui "Permanent link")

### Error message: 'There was a problem loading init data: API-Server can not be reached. It's probably down' [\#](\#error-message-there-was-a-problem-loading-init-data-api-server-can-not-be-reached-its-probably-down "Permanent link")

- Check that the names of the node file, node folder, and class match the path added to `packages/nodes-base/package.json`.
- Check that the names used in the `displayOptions` property are names used by UI elements in the node.

### Node icon doesn't show up in the Add Node menu and the Editor UI [\#](\#node-icon-doesnt-show-up-in-the-add-node-menu-and-the-editor-ui "Permanent link")

- Check that the icon is in the same folder as the node.
- Check that it's either in PNG or SVG format.
- When the `icon` property references the icon file, check that it includes the logo extension ( `.png` or `.svg`) and that it prefixes it with `file:`. For example, `file:friendGrid.png` or `file:friendGrid.svg`.

### Node icon doesn't fit [\#](\#node-icon-doesnt-fit "Permanent link")

- If you use an SVG file, make sure the canvas size is square. You can find instructions to change the canvas size of an SVG file using GIMP [here](https://docs.gimp.org/2.10/en/gimp-image-resize.html).
- If you use a PNG file, make sure that it's 60x60 pixels.

### Node doesn't show up in the Add Node menu [\#](\#node-doesnt-show-up-in-the-add-node-menu "Permanent link")

Check that you registered the node in the `package.json` file in your project.

### Changes to the description properties don't show in the UI on refreshing [\#](\#changes-to-the-description-properties-dont-show-in-the-ui-on-refreshing "Permanent link")

Every time you change the description properties, you have to stop the current n8n process ( `ctrl` \+ `c`) and run it again. You may also need to re-run `npm link`.

### Linter incorrectly warning about file name case [\#](\#linter-incorrectly-warning-about-file-name-case "Permanent link")

The node linter has rules for file names, including what case they should be. Windows users may encounter an issue when renaming files that causes the linter to continue giving warnings, even after you rename the files. This is due to a [known Windows issue](https://answers.microsoft.com/en-us/windows/forum/all/file-renaming-when-changing-case-doesnt-work/aa15ff7c-dd2d-4ed3-bcce-799ca90d4e58) with changing case when renaming files.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit

 Back to top
[Edit this page](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/creating-nodes/test/troubleshooting-node-development.md "Edit this page")

# Troubleshooting [\#](\#troubleshooting "Permanent link")

## Credentials [\#](\#credentials "Permanent link")

### Error message: 'Credentials of type "\*" aren't known' [\#](\#error-message-credentials-of-type-arent-known "Permanent link")

Check that the name in the credentials array matches the name used in the property name of the credentials' class.

![Troubleshooting credentials](../../../../_images/integrations/creating-nodes/troubleshooting-credentials-1.png)

## Editor UI [\#](\#editor-ui "Permanent link")

### Error message: 'There was a problem loading init data: API-Server can not be reached. It's probably down' [\#](\#error-message-there-was-a-problem-loading-init-data-api-server-can-not-be-reached-its-probably-down "Permanent link")

- Check that the names of the node file, node folder, and class match the path added to `packages/nodes-base/package.json`.
- Check that the names used in the `displayOptions` property are names used by UI elements in the node.

### Node icon doesn't show up in the Add Node menu and the Editor UI [\#](\#node-icon-doesnt-show-up-in-the-add-node-menu-and-the-editor-ui "Permanent link")

- Check that the icon is in the same folder as the node.
- Check that it's either in PNG or SVG format.
- When the `icon` property references the icon file, check that it includes the logo extension ( `.png` or `.svg`) and that it prefixes it with `file:`. For example, `file:friendGrid.png` or `file:friendGrid.svg`.

### Node icon doesn't fit [\#](\#node-icon-doesnt-fit "Permanent link")

- If you use an SVG file, make sure the canvas size is square. You can find instructions to change the canvas size of an SVG file using GIMP [here](https://docs.gimp.org/2.10/en/gimp-image-resize.html).
- If you use a PNG file, make sure that it's 60x60 pixels.

### Node doesn't show up in the Add Node menu [\#](\#node-doesnt-show-up-in-the-add-node-menu "Permanent link")

Check that you registered the node in the `package.json` file in your project.

### Changes to the description properties don't show in the UI on refreshing [\#](\#changes-to-the-description-properties-dont-show-in-the-ui-on-refreshing "Permanent link")

Every time you change the description properties, you have to stop the current n8n process ( `ctrl` \+ `c`) and run it again. You may also need to re-run `npm link`.

### Linter incorrectly warning about file name case [\#](\#linter-incorrectly-warning-about-file-name-case "Permanent link")

The node linter has rules for file names, including what case they should be. Windows users may encounter an issue when renaming files that causes the linter to continue giving warnings, even after you rename the files. This is due to a [known Windows issue](https://answers.microsoft.com/en-us/windows/forum/all/file-renaming-when-changing-case-doesnt-work/aa15ff7c-dd2d-4ed3-bcce-799ca90d4e58) with changing case when renaming files.

Chat with the docs

This page was![Thumbs up](/_images/assets/thumb_up.png)Helpful
![Thumbs down](/_images/assets/thumb_down.png)Not helpful

Thanks for your feedback!

Submit
