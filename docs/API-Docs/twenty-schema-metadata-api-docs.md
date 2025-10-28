| Property | Value |
| --- | --- |
| components | _object_ |
| externalDocs | _object_ |
| info | _object_ |
| openapi | 3.1.1 |
| paths | _object_ |
| security | _complex array_ |
| servers | _complex array_ |
| tags | _complex array_ |

### components
| Property | Value |
| --- | --- |
| parameters | _object_ |
| responses | _object_ |
| schemas | _object_ |
| securitySchemes | _object_ |

#### components.parameters
| Property | Value |
| --- | --- |
| depth | _object_ |
| endingBefore | _object_ |
| filter | _object_ |
| idPath | _object_ |
| limit | _object_ |
| orderBy | _object_ |
| startingAfter | _object_ |
| upsert | _object_ |

##### components.parameters.depth
| Property | Value |
| --- | --- |
| description | Determines the level of nested related objects to include in the response.  <br>    - 0: Primary object only  <br>    - 1: Primary object + direct relations |
| in | query |
| name | depth |
| required | false |
| schema | _object_ |

###### components.parameters.depth.schema
| Property | Value |
| --- | --- |
| default | 1 |
| enum | [0, 1] |
| type | integer |

##### components.parameters.endingBefore
| Property | Value |
| --- | --- |
| description | Returns objects ending before a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data |
| in | query |
| name | ending_before |
| required | false |
| schema | _object_ |

###### components.parameters.endingBefore.schema
| Property | Value |
| --- | --- |
| type | string |

##### components.parameters.filter
| Property | Value |
| --- | --- |
| description | Format: field[COMPARATOR]:value,field2[COMPARATOR]:value2  <br>    Refer to the filter section at the top of the page for more details. |
| examples | _object_ |
| in | query |
| name | filter |
| required | false |
| schema | _object_ |

###### components.parameters.filter.examples
| Property | Value |
| --- | --- |
| complex | _object_ |
| simple | _object_ |
| simpleNested | _object_ |

####### components.parameters.filter.examples.complex
| Property | Value |
| --- | --- |
| description | A more complex filter param |
| value | or(createdAt[gte]:"2024-01-01",createdAt[lte]:"2023-01-01",not(id[is]:NULL)) |

####### components.parameters.filter.examples.simple
| Property | Value |
| --- | --- |
| description | A simple filter param |
| value | createdAt[gte]:"2023-01-01" |

####### components.parameters.filter.examples.simpleNested
| Property | Value |
| --- | --- |
| description | A simple composite type filter param |
| value | emails.primaryEmail[eq]:foo99@example.com |

###### components.parameters.filter.schema
| Property | Value |
| --- | --- |
| type | string |

##### components.parameters.idPath
| Property | Value |
| --- | --- |
| description | Object id. |
| in | path |
| name | id |
| required | true |
| schema | _object_ |

###### components.parameters.idPath.schema
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.parameters.limit
| Property | Value |
| --- | --- |
| description | Limits the number of objects returned. |
| in | query |
| name | limit |
| required | false |
| schema | _object_ |

###### components.parameters.limit.schema
| Property | Value |
| --- | --- |
| default | 1000 |
| maximum | 1000 |
| minimum | 0 |
| type | integer |

##### components.parameters.orderBy
| Property | Value |
| --- | --- |
| description | Format: **field_name_1,field_name_2[DIRECTION_2]<br>    Refer to the filter section at the top of the page for more details. |
| examples | _object_ |
| in | query |
| name | order_by |
| required | false |
| schema | _object_ |

###### components.parameters.orderBy.examples
| Property | Value |
| --- | --- |
| complex | _object_ |
| simple | _object_ |

####### components.parameters.orderBy.examples.complex
| Property | Value |
| --- | --- |
| summary | A more complex order_by param |
| value | id[AscNullsFirst],createdAt[DescNullsLast] |

####### components.parameters.orderBy.examples.simple
| Property | Value |
| --- | --- |
| summary | A simple order_by param |
| value | createdAt |

###### components.parameters.orderBy.schema
| Property | Value |
| --- | --- |
| type | string |

##### components.parameters.startingAfter
| Property | Value |
| --- | --- |
| description | Returns objects starting after a specific cursor. You can find cursors in **startCursor** and **endCursor** in **pageInfo** in response data |
| in | query |
| name | starting_after |
| required | false |
| schema | _object_ |

###### components.parameters.startingAfter.schema
| Property | Value |
| --- | --- |
| type | string |

##### components.parameters.upsert
| Property | Value |
| --- | --- |
| description | If true, creates the object or updates it if it already exists. |
| in | query |
| name | upsert |
| required | false |
| schema | _object_ |

###### components.parameters.upsert.schema
| Property | Value |
| --- | --- |
| default | false |
| type | boolean |

#### components.responses
| Property | Value |
| --- | --- |
| 400 | _object_ |
| 401 | _object_ |

##### components.responses.400
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Bad Request |

###### components.responses.400.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

####### components.responses.400.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######## components.responses.400.content.application/json.schema
| Property | Value |
| --- | --- |
| example | _object_ |
| properties | _object_ |
| type | object |

######### components.responses.400.content.application/json.schema.example
| Property | Value |
| --- | --- |
| error | Bad Request |
| message | error message |
| statusCode | 400 |

######### components.responses.400.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| error | _object_ |
| messages | _object_ |
| statusCode | _object_ |

########## components.responses.400.content.application/json.schema.properties.error
| Property | Value |
| --- | --- |
| type | string |

########## components.responses.400.content.application/json.schema.properties.messages
| Property | Value |
| --- | --- |
| items | _object_ |
| type | array |

########### components.responses.400.content.application/json.schema.properties.messages.items
| Property | Value |
| --- | --- |
| type | string |

########## components.responses.400.content.application/json.schema.properties.statusCode
| Property | Value |
| --- | --- |
| type | number |

##### components.responses.401
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Unauthorized |

###### components.responses.401.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

####### components.responses.401.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######## components.responses.401.content.application/json.schema
| Property | Value |
| --- | --- |
| example | _object_ |
| properties | _object_ |
| type | object |

######### components.responses.401.content.application/json.schema.example
| Property | Value |
| --- | --- |
| error | Unauthorized |
| message | Token invalid. |
| statusCode | 401 |

######### components.responses.401.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| error | _object_ |
| message | _object_ |
| statusCode | _object_ |

########## components.responses.401.content.application/json.schema.properties.error
| Property | Value |
| --- | --- |
| type | string |

########## components.responses.401.content.application/json.schema.properties.message
| Property | Value |
| --- | --- |
| type | string |

########## components.responses.401.content.application/json.schema.properties.statusCode
| Property | Value |
| --- | --- |
| type | number |

#### components.schemas
| Property | Value |
| --- | --- |
| ApiKey | _object_ |
| ApiKeyForResponse | _object_ |
| ApiKeyForUpdate | _object_ |
| ApiKeys | _object_ |
| ApiKeysForResponse | _object_ |
| Field | _object_ |
| FieldForResponse | _object_ |
| FieldForUpdate | _object_ |
| Fields | _object_ |
| FieldsForResponse | _object_ |
| Object | _object_ |
| ObjectForResponse | _object_ |
| ObjectForUpdate | _object_ |
| Objects | _object_ |
| ObjectsForResponse | _object_ |
| View | _object_ |
| ViewField | _object_ |
| ViewFieldForResponse | _object_ |
| ViewFieldForUpdate | _object_ |
| ViewFields | _object_ |
| ViewFieldsForResponse | _object_ |
| ViewFilter | _object_ |
| ViewFilterForResponse | _object_ |
| ViewFilterForUpdate | _object_ |
| ViewFilterGroup | _object_ |
| ViewFilterGroupForResponse | _object_ |
| ViewFilterGroupForUpdate | _object_ |
| ViewFilterGroups | _object_ |
| ViewFilterGroupsForResponse | _object_ |
| ViewFilters | _object_ |
| ViewFiltersForResponse | _object_ |
| ViewForResponse | _object_ |
| ViewForUpdate | _object_ |
| ViewGroup | _object_ |
| ViewGroupForResponse | _object_ |
| ViewGroupForUpdate | _object_ |
| ViewGroups | _object_ |
| ViewGroupsForResponse | _object_ |
| ViewSort | _object_ |
| ViewSortForResponse | _object_ |
| ViewSortForUpdate | _object_ |
| ViewSorts | _object_ |
| ViewSortsForResponse | _object_ |
| Views | _object_ |
| ViewsForResponse | _object_ |
| Webhook | _object_ |
| WebhookForResponse | _object_ |
| WebhookForUpdate | _object_ |
| Webhooks | _object_ |
| WebhooksForResponse | _object_ |

##### components.schemas.ApiKey
| Property | Value |
| --- | --- |
| description | An API key |
| properties | _object_ |
| required | [name, expiresAt, roleId] |
| type | object |

###### components.schemas.ApiKey.properties
| Property | Value |
| --- | --- |
| expiresAt | _object_ |
| name | _object_ |
| roleId | _object_ |

####### components.schemas.ApiKey.properties.expiresAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ApiKey.properties.name
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ApiKey.properties.roleId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.ApiKeyForResponse
| Property | Value |
| --- | --- |
| description | An API key |
| properties | _object_ |
| type | object |

###### components.schemas.ApiKeyForResponse.properties
| Property | Value |
| --- | --- |
| createdAt | _object_ |
| expiresAt | _object_ |
| id | _object_ |
| name | _object_ |
| revokedAt | _object_ |
| roleId | _object_ |
| updatedAt | _object_ |
| workspaceId | _object_ |

####### components.schemas.ApiKeyForResponse.properties.createdAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ApiKeyForResponse.properties.expiresAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ApiKeyForResponse.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ApiKeyForResponse.properties.name
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ApiKeyForResponse.properties.revokedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ApiKeyForResponse.properties.roleId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ApiKeyForResponse.properties.updatedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ApiKeyForResponse.properties.workspaceId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.ApiKeyForUpdate
| Property | Value |
| --- | --- |
| description | An API key for update |
| properties | _object_ |
| type | object |

###### components.schemas.ApiKeyForUpdate.properties
| Property | Value |
| --- | --- |
| expiresAt | _object_ |
| name | _object_ |
| revokedAt | _object_ |

####### components.schemas.ApiKeyForUpdate.properties.expiresAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ApiKeyForUpdate.properties.name
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ApiKeyForUpdate.properties.revokedAt
| Property | Value |
| --- | --- |
| description | Set to null to clear revocation. Defaults to null if not provided. |
| format | date-time |
| type | string |

##### components.schemas.ApiKeys
| Property | Value |
| --- | --- |
| description | A list of apiKeys |
| items | _object_ |
| type | array |

###### components.schemas.ApiKeys.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ApiKey |

##### components.schemas.ApiKeysForResponse
| Property | Value |
| --- | --- |
| description | A list of apiKeys |
| items | _object_ |
| type | array |

###### components.schemas.ApiKeysForResponse.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ApiKeyForResponse |

##### components.schemas.Field
| Property | Value |
| --- | --- |
| description | A field |
| properties | _object_ |
| required | [type, name, label, objectMetadataId] |
| type | object |

###### components.schemas.Field.properties
| Property | Value |
| --- | --- |
| defaultValue | _object_ |
| description | _object_ |
| icon | _object_ |
| isNullable | _object_ |
| label | _object_ |
| name | _object_ |
| objectMetadataId | _object_ |
| options | _object_ |
| settings | _object_ |
| type | _object_ |

####### components.schemas.Field.properties.defaultValue

_Empty object_

####### components.schemas.Field.properties.description
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.Field.properties.icon
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.Field.properties.isNullable
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.Field.properties.label
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.Field.properties.name
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.Field.properties.objectMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.Field.properties.options
| Property | Value |
| --- | --- |
| description | For enum field types like SELECT or MULTI_SELECT |
| items | _object_ |
| type | array |

######## components.schemas.Field.properties.options.items
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

######### components.schemas.Field.properties.options.items.properties
| Property | Value |
| --- | --- |
| color | _object_ |
| label | _object_ |
| position | _object_ |
| value | _object_ |

########## components.schemas.Field.properties.options.items.properties.color
| Property | Value |
| --- | --- |
| type | string |

########## components.schemas.Field.properties.options.items.properties.label
| Property | Value |
| --- | --- |
| type | string |

########## components.schemas.Field.properties.options.items.properties.position
| Property | Value |
| --- | --- |
| type | number |

########## components.schemas.Field.properties.options.items.properties.value
| Property | Value |
| --- | --- |
| example | OPTION_1 |
| pattern | ^[A-Z0-9]+_[A-Z0-9]+$ |
| type | string |

####### components.schemas.Field.properties.settings
| Property | Value |
| --- | --- |
| type | object |

####### components.schemas.Field.properties.type
| Property | Value |
| --- | --- |
| enum | [UUID, TEXT, PHONES, EMAILS, DATE_TIME, DATE, BOOLEAN, NUMBER, NUMERIC, LINKS, CURRENCY, FULL_NAME, RATING, SELECT, MULTI_SELECT, RELATION, MORPH_RELATION, POSITION, ADDRESS, RAW_JSON, RICH_TEXT, RICH_TEXT_V2, ACTOR, ARRAY, TS_VECTOR] |
| type | string |

##### components.schemas.FieldForResponse
| Property | Value |
| --- | --- |
| description | A field |
| properties | _object_ |
| type | object |

###### components.schemas.FieldForResponse.properties
| Property | Value |
| --- | --- |
| createdAt | _object_ |
| defaultValue | _object_ |
| description | _object_ |
| icon | _object_ |
| id | _object_ |
| isActive | _object_ |
| isCustom | _object_ |
| isNullable | _object_ |
| isSystem | _object_ |
| label | _object_ |
| name | _object_ |
| objectMetadataId | _object_ |
| options | _object_ |
| settings | _object_ |
| type | _object_ |
| updatedAt | _object_ |

####### components.schemas.FieldForResponse.properties.createdAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.FieldForResponse.properties.defaultValue

_Empty object_

####### components.schemas.FieldForResponse.properties.description
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.FieldForResponse.properties.icon
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.FieldForResponse.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.FieldForResponse.properties.isActive
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.FieldForResponse.properties.isCustom
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.FieldForResponse.properties.isNullable
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.FieldForResponse.properties.isSystem
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.FieldForResponse.properties.label
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.FieldForResponse.properties.name
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.FieldForResponse.properties.objectMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.FieldForResponse.properties.options
| Property | Value |
| --- | --- |
| description | For enum field types like SELECT or MULTI_SELECT |
| items | _object_ |
| type | array |

######## components.schemas.FieldForResponse.properties.options.items
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

######### components.schemas.FieldForResponse.properties.options.items.properties
| Property | Value |
| --- | --- |
| color | _object_ |
| label | _object_ |
| position | _object_ |
| value | _object_ |

########## components.schemas.FieldForResponse.properties.options.items.properties.color
| Property | Value |
| --- | --- |
| type | string |

########## components.schemas.FieldForResponse.properties.options.items.properties.label
| Property | Value |
| --- | --- |
| type | string |

########## components.schemas.FieldForResponse.properties.options.items.properties.position
| Property | Value |
| --- | --- |
| type | number |

########## components.schemas.FieldForResponse.properties.options.items.properties.value
| Property | Value |
| --- | --- |
| example | OPTION_1 |
| pattern | ^[A-Z0-9]+_[A-Z0-9]+$ |
| type | string |

####### components.schemas.FieldForResponse.properties.settings
| Property | Value |
| --- | --- |
| type | object |

####### components.schemas.FieldForResponse.properties.type
| Property | Value |
| --- | --- |
| enum | [UUID, TEXT, PHONES, EMAILS, DATE_TIME, DATE, BOOLEAN, NUMBER, NUMERIC, LINKS, CURRENCY, FULL_NAME, RATING, SELECT, MULTI_SELECT, RELATION, MORPH_RELATION, POSITION, ADDRESS, RAW_JSON, RICH_TEXT, RICH_TEXT_V2, ACTOR, ARRAY, TS_VECTOR] |
| type | string |

####### components.schemas.FieldForResponse.properties.updatedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

##### components.schemas.FieldForUpdate
| Property | Value |
| --- | --- |
| description | A field |
| properties | _object_ |
| type | object |

###### components.schemas.FieldForUpdate.properties
| Property | Value |
| --- | --- |
| defaultValue | _object_ |
| description | _object_ |
| icon | _object_ |
| isNullable | _object_ |
| label | _object_ |
| name | _object_ |
| options | _object_ |
| settings | _object_ |

####### components.schemas.FieldForUpdate.properties.defaultValue

_Empty object_

####### components.schemas.FieldForUpdate.properties.description
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.FieldForUpdate.properties.icon
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.FieldForUpdate.properties.isNullable
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.FieldForUpdate.properties.label
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.FieldForUpdate.properties.name
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.FieldForUpdate.properties.options
| Property | Value |
| --- | --- |
| description | For enum field types like SELECT or MULTI_SELECT |
| items | _object_ |
| type | array |

######## components.schemas.FieldForUpdate.properties.options.items
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

######### components.schemas.FieldForUpdate.properties.options.items.properties
| Property | Value |
| --- | --- |
| color | _object_ |
| label | _object_ |
| position | _object_ |
| value | _object_ |

########## components.schemas.FieldForUpdate.properties.options.items.properties.color
| Property | Value |
| --- | --- |
| type | string |

########## components.schemas.FieldForUpdate.properties.options.items.properties.label
| Property | Value |
| --- | --- |
| type | string |

########## components.schemas.FieldForUpdate.properties.options.items.properties.position
| Property | Value |
| --- | --- |
| type | number |

########## components.schemas.FieldForUpdate.properties.options.items.properties.value
| Property | Value |
| --- | --- |
| example | OPTION_1 |
| pattern | ^[A-Z0-9]+_[A-Z0-9]+$ |
| type | string |

####### components.schemas.FieldForUpdate.properties.settings
| Property | Value |
| --- | --- |
| type | object |

##### components.schemas.Fields
| Property | Value |
| --- | --- |
| description | A list of fields |
| items | _object_ |
| type | array |

###### components.schemas.Fields.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/Field |

##### components.schemas.FieldsForResponse
| Property | Value |
| --- | --- |
| description | A list of fields |
| items | _object_ |
| type | array |

###### components.schemas.FieldsForResponse.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/FieldForResponse |

##### components.schemas.Object
| Property | Value |
| --- | --- |
| description | An object |
| properties | _object_ |
| type | object |

###### components.schemas.Object.properties
| Property | Value |
| --- | --- |
| description | _object_ |
| icon | _object_ |
| imageIdentifierFieldMetadataId | _object_ |
| labelIdentifierFieldMetadataId | _object_ |
| labelPlural | _object_ |
| labelSingular | _object_ |
| namePlural | _object_ |
| nameSingular | _object_ |

####### components.schemas.Object.properties.description
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.Object.properties.icon
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.Object.properties.imageIdentifierFieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.Object.properties.labelIdentifierFieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.Object.properties.labelPlural
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.Object.properties.labelSingular
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.Object.properties.namePlural
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.Object.properties.nameSingular
| Property | Value |
| --- | --- |
| type | string |

##### components.schemas.ObjectForResponse
| Property | Value |
| --- | --- |
| description | An object |
| properties | _object_ |
| type | object |

###### components.schemas.ObjectForResponse.properties
| Property | Value |
| --- | --- |
| createdAt | _object_ |
| dataSourceId | _object_ |
| description | _object_ |
| fields | _object_ |
| icon | _object_ |
| id | _object_ |
| imageIdentifierFieldMetadataId | _object_ |
| isActive | _object_ |
| isCustom | _object_ |
| isSystem | _object_ |
| labelIdentifierFieldMetadataId | _object_ |
| labelPlural | _object_ |
| labelSingular | _object_ |
| namePlural | _object_ |
| nameSingular | _object_ |
| updatedAt | _object_ |

####### components.schemas.ObjectForResponse.properties.createdAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ObjectForResponse.properties.dataSourceId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ObjectForResponse.properties.description
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ObjectForResponse.properties.fields
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

######## components.schemas.ObjectForResponse.properties.fields.properties
| Property | Value |
| --- | --- |
| edges | _object_ |

######### components.schemas.ObjectForResponse.properties.fields.properties.edges
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########## components.schemas.ObjectForResponse.properties.fields.properties.edges.properties
| Property | Value |
| --- | --- |
| node | _object_ |

########### components.schemas.ObjectForResponse.properties.fields.properties.edges.properties.node
| Property | Value |
| --- | --- |
| items | _object_ |
| type | array |

############ components.schemas.ObjectForResponse.properties.fields.properties.edges.properties.node.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/FieldForResponse |

####### components.schemas.ObjectForResponse.properties.icon
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ObjectForResponse.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ObjectForResponse.properties.imageIdentifierFieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ObjectForResponse.properties.isActive
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.ObjectForResponse.properties.isCustom
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.ObjectForResponse.properties.isSystem
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.ObjectForResponse.properties.labelIdentifierFieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ObjectForResponse.properties.labelPlural
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ObjectForResponse.properties.labelSingular
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ObjectForResponse.properties.namePlural
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ObjectForResponse.properties.nameSingular
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ObjectForResponse.properties.updatedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

##### components.schemas.ObjectForUpdate
| Property | Value |
| --- | --- |
| description | An object |
| properties | _object_ |
| type | object |

###### components.schemas.ObjectForUpdate.properties
| Property | Value |
| --- | --- |
| isActive | _object_ |

####### components.schemas.ObjectForUpdate.properties.isActive
| Property | Value |
| --- | --- |
| type | boolean |

##### components.schemas.Objects
| Property | Value |
| --- | --- |
| description | A list of objects |
| items | _object_ |
| type | array |

###### components.schemas.Objects.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/Object |

##### components.schemas.ObjectsForResponse
| Property | Value |
| --- | --- |
| description | A list of objects |
| items | _object_ |
| type | array |

###### components.schemas.ObjectsForResponse.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ObjectForResponse |

##### components.schemas.View
| Property | Value |
| --- | --- |
| description | A view |
| properties | _object_ |
| required | [name, objectMetadataId, icon] |
| type | object |

###### components.schemas.View.properties
| Property | Value |
| --- | --- |
| anyFieldFilterValue | _object_ |
| icon | _object_ |
| isCompact | _object_ |
| kanbanAggregateOperation | _object_ |
| kanbanAggregateOperationFieldMetadataId | _object_ |
| key | _object_ |
| name | _object_ |
| objectMetadataId | _object_ |
| openRecordIn | _object_ |
| position | _object_ |
| type | _object_ |

####### components.schemas.View.properties.anyFieldFilterValue
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.View.properties.icon
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.View.properties.isCompact
| Property | Value |
| --- | --- |
| default | false |
| type | boolean |

####### components.schemas.View.properties.kanbanAggregateOperation
| Property | Value |
| --- | --- |
| enum | [AVG, COUNT, MAX, MIN, SUM] |
| type | string |

####### components.schemas.View.properties.kanbanAggregateOperationFieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.View.properties.key
| Property | Value |
| --- | --- |
| default | INDEX |
| type | string |

####### components.schemas.View.properties.name
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.View.properties.objectMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.View.properties.openRecordIn
| Property | Value |
| --- | --- |
| default | SIDE_PANEL |
| enum | [SIDE_PANEL, RECORD_PAGE] |
| type | string |

####### components.schemas.View.properties.position
| Property | Value |
| --- | --- |
| default | 0 |
| type | number |

####### components.schemas.View.properties.type
| Property | Value |
| --- | --- |
| default | TABLE |
| enum | [TABLE, KANBAN] |
| type | string |

##### components.schemas.ViewField
| Property | Value |
| --- | --- |
| description | A view field |
| properties | _object_ |
| required | [fieldMetadataId, viewId] |
| type | object |

###### components.schemas.ViewField.properties
| Property | Value |
| --- | --- |
| aggregateOperation | _object_ |
| fieldMetadataId | _object_ |
| isVisible | _object_ |
| position | _object_ |
| size | _object_ |
| viewId | _object_ |

####### components.schemas.ViewField.properties.aggregateOperation
| Property | Value |
| --- | --- |
| enum | [AVG, COUNT, MAX, MIN, SUM] |
| type | string |

####### components.schemas.ViewField.properties.fieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewField.properties.isVisible
| Property | Value |
| --- | --- |
| default | true |
| type | boolean |

####### components.schemas.ViewField.properties.position
| Property | Value |
| --- | --- |
| default | 0 |
| type | number |

####### components.schemas.ViewField.properties.size
| Property | Value |
| --- | --- |
| default | 0 |
| type | number |

####### components.schemas.ViewField.properties.viewId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.ViewFieldForResponse
| Property | Value |
| --- | --- |
| description | A view field |
| properties | _object_ |
| type | object |

###### components.schemas.ViewFieldForResponse.properties
| Property | Value |
| --- | --- |
| aggregateOperation | _object_ |
| createdAt | _object_ |
| deletedAt | _object_ |
| fieldMetadataId | _object_ |
| id | _object_ |
| isVisible | _object_ |
| position | _object_ |
| size | _object_ |
| updatedAt | _object_ |
| viewId | _object_ |
| workspaceId | _object_ |

####### components.schemas.ViewFieldForResponse.properties.aggregateOperation
| Property | Value |
| --- | --- |
| enum | [AVG, COUNT, MAX, MIN, SUM] |
| type | string |

####### components.schemas.ViewFieldForResponse.properties.createdAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewFieldForResponse.properties.deletedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewFieldForResponse.properties.fieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewFieldForResponse.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewFieldForResponse.properties.isVisible
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.ViewFieldForResponse.properties.position
| Property | Value |
| --- | --- |
| type | number |

####### components.schemas.ViewFieldForResponse.properties.size
| Property | Value |
| --- | --- |
| type | number |

####### components.schemas.ViewFieldForResponse.properties.updatedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewFieldForResponse.properties.viewId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewFieldForResponse.properties.workspaceId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.ViewFieldForUpdate
| Property | Value |
| --- | --- |
| description | A view field for update |
| properties | _object_ |
| type | object |

###### components.schemas.ViewFieldForUpdate.properties
| Property | Value |
| --- | --- |
| aggregateOperation | _object_ |
| isVisible | _object_ |
| position | _object_ |
| size | _object_ |

####### components.schemas.ViewFieldForUpdate.properties.aggregateOperation
| Property | Value |
| --- | --- |
| enum | [AVG, COUNT, MAX, MIN, SUM] |
| type | string |

####### components.schemas.ViewFieldForUpdate.properties.isVisible
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.ViewFieldForUpdate.properties.position
| Property | Value |
| --- | --- |
| type | number |

####### components.schemas.ViewFieldForUpdate.properties.size
| Property | Value |
| --- | --- |
| type | number |

##### components.schemas.ViewFields
| Property | Value |
| --- | --- |
| description | A list of viewFields |
| items | _object_ |
| type | array |

###### components.schemas.ViewFields.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewField |

##### components.schemas.ViewFieldsForResponse
| Property | Value |
| --- | --- |
| description | A list of viewFields |
| items | _object_ |
| type | array |

###### components.schemas.ViewFieldsForResponse.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFieldForResponse |

##### components.schemas.ViewFilter
| Property | Value |
| --- | --- |
| description | A view filter |
| properties | _object_ |
| required | [fieldMetadataId, viewId, value] |
| type | object |

###### components.schemas.ViewFilter.properties
| Property | Value |
| --- | --- |
| fieldMetadataId | _object_ |
| operand | _object_ |
| positionInViewFilterGroup | _object_ |
| subFieldName | _object_ |
| value | _object_ |
| viewFilterGroupId | _object_ |
| viewId | _object_ |

####### components.schemas.ViewFilter.properties.fieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewFilter.properties.operand
| Property | Value |
| --- | --- |
| default | CONTAINS |
| enum | [IS, IS_NOT_NULL, IS_NOT, LESS_THAN_OR_EQUAL, GREATER_THAN_OR_EQUAL, IS_BEFORE, IS_AFTER, CONTAINS, DOES_NOT_CONTAIN, IS_EMPTY, IS_NOT_EMPTY, IS_RELATIVE, IS_IN_PAST, IS_IN_FUTURE, IS_TODAY, VECTOR_SEARCH] |
| type | string |

####### components.schemas.ViewFilter.properties.positionInViewFilterGroup
| Property | Value |
| --- | --- |
| type | number |

####### components.schemas.ViewFilter.properties.subFieldName
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ViewFilter.properties.value
| Property | Value |
| --- | --- |
| description | Filter value (JSON format) |
| type | object |

####### components.schemas.ViewFilter.properties.viewFilterGroupId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewFilter.properties.viewId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.ViewFilterForResponse
| Property | Value |
| --- | --- |
| description | A view filter |
| properties | _object_ |
| type | object |

###### components.schemas.ViewFilterForResponse.properties
| Property | Value |
| --- | --- |
| createdAt | _object_ |
| deletedAt | _object_ |
| fieldMetadataId | _object_ |
| id | _object_ |
| operand | _object_ |
| positionInViewFilterGroup | _object_ |
| subFieldName | _object_ |
| updatedAt | _object_ |
| value | _object_ |
| viewFilterGroupId | _object_ |
| viewId | _object_ |
| workspaceId | _object_ |

####### components.schemas.ViewFilterForResponse.properties.createdAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewFilterForResponse.properties.deletedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewFilterForResponse.properties.fieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewFilterForResponse.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewFilterForResponse.properties.operand
| Property | Value |
| --- | --- |
| enum | [IS, IS_NOT_NULL, IS_NOT, LESS_THAN_OR_EQUAL, GREATER_THAN_OR_EQUAL, IS_BEFORE, IS_AFTER, CONTAINS, DOES_NOT_CONTAIN, IS_EMPTY, IS_NOT_EMPTY, IS_RELATIVE, IS_IN_PAST, IS_IN_FUTURE, IS_TODAY, VECTOR_SEARCH] |
| type | string |

####### components.schemas.ViewFilterForResponse.properties.positionInViewFilterGroup
| Property | Value |
| --- | --- |
| type | number |

####### components.schemas.ViewFilterForResponse.properties.subFieldName
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ViewFilterForResponse.properties.updatedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewFilterForResponse.properties.value
| Property | Value |
| --- | --- |
| description | Filter value (JSON format) |
| type | object |

####### components.schemas.ViewFilterForResponse.properties.viewFilterGroupId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewFilterForResponse.properties.viewId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewFilterForResponse.properties.workspaceId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.ViewFilterForUpdate
| Property | Value |
| --- | --- |
| description | A view filter for update |
| properties | _object_ |
| type | object |

###### components.schemas.ViewFilterForUpdate.properties
| Property | Value |
| --- | --- |
| operand | _object_ |
| positionInViewFilterGroup | _object_ |
| subFieldName | _object_ |
| value | _object_ |
| viewFilterGroupId | _object_ |

####### components.schemas.ViewFilterForUpdate.properties.operand
| Property | Value |
| --- | --- |
| enum | [IS, IS_NOT_NULL, IS_NOT, LESS_THAN_OR_EQUAL, GREATER_THAN_OR_EQUAL, IS_BEFORE, IS_AFTER, CONTAINS, DOES_NOT_CONTAIN, IS_EMPTY, IS_NOT_EMPTY, IS_RELATIVE, IS_IN_PAST, IS_IN_FUTURE, IS_TODAY, VECTOR_SEARCH] |
| type | string |

####### components.schemas.ViewFilterForUpdate.properties.positionInViewFilterGroup
| Property | Value |
| --- | --- |
| type | number |

####### components.schemas.ViewFilterForUpdate.properties.subFieldName
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ViewFilterForUpdate.properties.value
| Property | Value |
| --- | --- |
| description | Filter value (JSON format) |
| type | object |

####### components.schemas.ViewFilterForUpdate.properties.viewFilterGroupId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.ViewFilterGroup
| Property | Value |
| --- | --- |
| description | A view filter group |
| properties | _object_ |
| required | [viewId] |
| type | object |

###### components.schemas.ViewFilterGroup.properties
| Property | Value |
| --- | --- |
| logicalOperator | _object_ |
| parentViewFilterGroupId | _object_ |
| positionInViewFilterGroup | _object_ |
| viewId | _object_ |

####### components.schemas.ViewFilterGroup.properties.logicalOperator
| Property | Value |
| --- | --- |
| default | AND |
| enum | [AND, OR, NOT] |
| type | string |

####### components.schemas.ViewFilterGroup.properties.parentViewFilterGroupId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewFilterGroup.properties.positionInViewFilterGroup
| Property | Value |
| --- | --- |
| type | number |

####### components.schemas.ViewFilterGroup.properties.viewId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.ViewFilterGroupForResponse
| Property | Value |
| --- | --- |
| description | A view filter group |
| properties | _object_ |
| type | object |

###### components.schemas.ViewFilterGroupForResponse.properties
| Property | Value |
| --- | --- |
| createdAt | _object_ |
| deletedAt | _object_ |
| id | _object_ |
| logicalOperator | _object_ |
| parentViewFilterGroupId | _object_ |
| positionInViewFilterGroup | _object_ |
| updatedAt | _object_ |
| viewId | _object_ |
| workspaceId | _object_ |

####### components.schemas.ViewFilterGroupForResponse.properties.createdAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewFilterGroupForResponse.properties.deletedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewFilterGroupForResponse.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewFilterGroupForResponse.properties.logicalOperator
| Property | Value |
| --- | --- |
| enum | [AND, OR, NOT] |
| type | string |

####### components.schemas.ViewFilterGroupForResponse.properties.parentViewFilterGroupId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewFilterGroupForResponse.properties.positionInViewFilterGroup
| Property | Value |
| --- | --- |
| type | number |

####### components.schemas.ViewFilterGroupForResponse.properties.updatedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewFilterGroupForResponse.properties.viewId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewFilterGroupForResponse.properties.workspaceId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.ViewFilterGroupForUpdate
| Property | Value |
| --- | --- |
| description | A view filter group for update |
| properties | _object_ |
| type | object |

###### components.schemas.ViewFilterGroupForUpdate.properties
| Property | Value |
| --- | --- |
| logicalOperator | _object_ |
| parentViewFilterGroupId | _object_ |
| positionInViewFilterGroup | _object_ |

####### components.schemas.ViewFilterGroupForUpdate.properties.logicalOperator
| Property | Value |
| --- | --- |
| enum | [AND, OR, NOT] |
| type | string |

####### components.schemas.ViewFilterGroupForUpdate.properties.parentViewFilterGroupId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewFilterGroupForUpdate.properties.positionInViewFilterGroup
| Property | Value |
| --- | --- |
| type | number |

##### components.schemas.ViewFilterGroups
| Property | Value |
| --- | --- |
| description | A list of viewFilterGroups |
| items | _object_ |
| type | array |

###### components.schemas.ViewFilterGroups.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilterGroup |

##### components.schemas.ViewFilterGroupsForResponse
| Property | Value |
| --- | --- |
| description | A list of viewFilterGroups |
| items | _object_ |
| type | array |

###### components.schemas.ViewFilterGroupsForResponse.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilterGroupForResponse |

##### components.schemas.ViewFilters
| Property | Value |
| --- | --- |
| description | A list of viewFilters |
| items | _object_ |
| type | array |

###### components.schemas.ViewFilters.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilter |

##### components.schemas.ViewFiltersForResponse
| Property | Value |
| --- | --- |
| description | A list of viewFilters |
| items | _object_ |
| type | array |

###### components.schemas.ViewFiltersForResponse.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilterForResponse |

##### components.schemas.ViewForResponse
| Property | Value |
| --- | --- |
| description | A view |
| properties | _object_ |
| type | object |

###### components.schemas.ViewForResponse.properties
| Property | Value |
| --- | --- |
| anyFieldFilterValue | _object_ |
| createdAt | _object_ |
| deletedAt | _object_ |
| icon | _object_ |
| id | _object_ |
| isCompact | _object_ |
| kanbanAggregateOperation | _object_ |
| kanbanAggregateOperationFieldMetadataId | _object_ |
| key | _object_ |
| name | _object_ |
| objectMetadataId | _object_ |
| openRecordIn | _object_ |
| position | _object_ |
| type | _object_ |
| updatedAt | _object_ |
| workspaceId | _object_ |

####### components.schemas.ViewForResponse.properties.anyFieldFilterValue
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ViewForResponse.properties.createdAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewForResponse.properties.deletedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewForResponse.properties.icon
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ViewForResponse.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewForResponse.properties.isCompact
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.ViewForResponse.properties.kanbanAggregateOperation
| Property | Value |
| --- | --- |
| enum | [AVG, COUNT, MAX, MIN, SUM] |
| type | string |

####### components.schemas.ViewForResponse.properties.kanbanAggregateOperationFieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewForResponse.properties.key
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ViewForResponse.properties.name
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ViewForResponse.properties.objectMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewForResponse.properties.openRecordIn
| Property | Value |
| --- | --- |
| enum | [SIDE_PANEL, RECORD_PAGE] |
| type | string |

####### components.schemas.ViewForResponse.properties.position
| Property | Value |
| --- | --- |
| type | number |

####### components.schemas.ViewForResponse.properties.type
| Property | Value |
| --- | --- |
| enum | [TABLE, KANBAN] |
| type | string |

####### components.schemas.ViewForResponse.properties.updatedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewForResponse.properties.workspaceId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.ViewForUpdate
| Property | Value |
| --- | --- |
| description | A view for update |
| properties | _object_ |
| type | object |

###### components.schemas.ViewForUpdate.properties
| Property | Value |
| --- | --- |
| anyFieldFilterValue | _object_ |
| icon | _object_ |
| isCompact | _object_ |
| kanbanAggregateOperation | _object_ |
| kanbanAggregateOperationFieldMetadataId | _object_ |
| key | _object_ |
| name | _object_ |
| openRecordIn | _object_ |
| position | _object_ |
| type | _object_ |

####### components.schemas.ViewForUpdate.properties.anyFieldFilterValue
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ViewForUpdate.properties.icon
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ViewForUpdate.properties.isCompact
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.ViewForUpdate.properties.kanbanAggregateOperation
| Property | Value |
| --- | --- |
| enum | [AVG, COUNT, MAX, MIN, SUM] |
| type | string |

####### components.schemas.ViewForUpdate.properties.kanbanAggregateOperationFieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewForUpdate.properties.key
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ViewForUpdate.properties.name
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ViewForUpdate.properties.openRecordIn
| Property | Value |
| --- | --- |
| enum | [SIDE_PANEL, RECORD_PAGE] |
| type | string |

####### components.schemas.ViewForUpdate.properties.position
| Property | Value |
| --- | --- |
| type | number |

####### components.schemas.ViewForUpdate.properties.type
| Property | Value |
| --- | --- |
| enum | [TABLE, KANBAN] |
| type | string |

##### components.schemas.ViewGroup
| Property | Value |
| --- | --- |
| description | A view group |
| properties | _object_ |
| required | [fieldMetadataId, viewId, fieldValue] |
| type | object |

###### components.schemas.ViewGroup.properties
| Property | Value |
| --- | --- |
| fieldMetadataId | _object_ |
| fieldValue | _object_ |
| isVisible | _object_ |
| position | _object_ |
| viewId | _object_ |

####### components.schemas.ViewGroup.properties.fieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewGroup.properties.fieldValue
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ViewGroup.properties.isVisible
| Property | Value |
| --- | --- |
| default | true |
| type | boolean |

####### components.schemas.ViewGroup.properties.position
| Property | Value |
| --- | --- |
| default | 0 |
| type | number |

####### components.schemas.ViewGroup.properties.viewId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.ViewGroupForResponse
| Property | Value |
| --- | --- |
| description | A view group |
| properties | _object_ |
| type | object |

###### components.schemas.ViewGroupForResponse.properties
| Property | Value |
| --- | --- |
| createdAt | _object_ |
| deletedAt | _object_ |
| fieldMetadataId | _object_ |
| fieldValue | _object_ |
| id | _object_ |
| isVisible | _object_ |
| position | _object_ |
| updatedAt | _object_ |
| viewId | _object_ |
| workspaceId | _object_ |

####### components.schemas.ViewGroupForResponse.properties.createdAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewGroupForResponse.properties.deletedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewGroupForResponse.properties.fieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewGroupForResponse.properties.fieldValue
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ViewGroupForResponse.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewGroupForResponse.properties.isVisible
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.ViewGroupForResponse.properties.position
| Property | Value |
| --- | --- |
| type | number |

####### components.schemas.ViewGroupForResponse.properties.updatedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewGroupForResponse.properties.viewId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewGroupForResponse.properties.workspaceId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.ViewGroupForUpdate
| Property | Value |
| --- | --- |
| description | A view group for update |
| properties | _object_ |
| type | object |

###### components.schemas.ViewGroupForUpdate.properties
| Property | Value |
| --- | --- |
| fieldValue | _object_ |
| isVisible | _object_ |
| position | _object_ |

####### components.schemas.ViewGroupForUpdate.properties.fieldValue
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.ViewGroupForUpdate.properties.isVisible
| Property | Value |
| --- | --- |
| type | boolean |

####### components.schemas.ViewGroupForUpdate.properties.position
| Property | Value |
| --- | --- |
| type | number |

##### components.schemas.ViewGroups
| Property | Value |
| --- | --- |
| description | A list of viewGroups |
| items | _object_ |
| type | array |

###### components.schemas.ViewGroups.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewGroup |

##### components.schemas.ViewGroupsForResponse
| Property | Value |
| --- | --- |
| description | A list of viewGroups |
| items | _object_ |
| type | array |

###### components.schemas.ViewGroupsForResponse.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewGroupForResponse |

##### components.schemas.ViewSort
| Property | Value |
| --- | --- |
| description | A view sort |
| properties | _object_ |
| required | [fieldMetadataId, viewId] |
| type | object |

###### components.schemas.ViewSort.properties
| Property | Value |
| --- | --- |
| direction | _object_ |
| fieldMetadataId | _object_ |
| viewId | _object_ |

####### components.schemas.ViewSort.properties.direction
| Property | Value |
| --- | --- |
| default | ASC |
| enum | [ASC, DESC] |
| type | string |

####### components.schemas.ViewSort.properties.fieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewSort.properties.viewId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.ViewSortForResponse
| Property | Value |
| --- | --- |
| description | A view sort |
| properties | _object_ |
| type | object |

###### components.schemas.ViewSortForResponse.properties
| Property | Value |
| --- | --- |
| createdAt | _object_ |
| deletedAt | _object_ |
| direction | _object_ |
| fieldMetadataId | _object_ |
| id | _object_ |
| updatedAt | _object_ |
| viewId | _object_ |
| workspaceId | _object_ |

####### components.schemas.ViewSortForResponse.properties.createdAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewSortForResponse.properties.deletedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewSortForResponse.properties.direction
| Property | Value |
| --- | --- |
| enum | [ASC, DESC] |
| type | string |

####### components.schemas.ViewSortForResponse.properties.fieldMetadataId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewSortForResponse.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewSortForResponse.properties.updatedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.ViewSortForResponse.properties.viewId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.ViewSortForResponse.properties.workspaceId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.ViewSortForUpdate
| Property | Value |
| --- | --- |
| description | A view sort for update |
| properties | _object_ |
| type | object |

###### components.schemas.ViewSortForUpdate.properties
| Property | Value |
| --- | --- |
| direction | _object_ |

####### components.schemas.ViewSortForUpdate.properties.direction
| Property | Value |
| --- | --- |
| enum | [ASC, DESC] |
| type | string |

##### components.schemas.ViewSorts
| Property | Value |
| --- | --- |
| description | A list of viewSorts |
| items | _object_ |
| type | array |

###### components.schemas.ViewSorts.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewSort |

##### components.schemas.ViewSortsForResponse
| Property | Value |
| --- | --- |
| description | A list of viewSorts |
| items | _object_ |
| type | array |

###### components.schemas.ViewSortsForResponse.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewSortForResponse |

##### components.schemas.Views
| Property | Value |
| --- | --- |
| description | A list of views |
| items | _object_ |
| type | array |

###### components.schemas.Views.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/View |

##### components.schemas.ViewsForResponse
| Property | Value |
| --- | --- |
| description | A list of views |
| items | _object_ |
| type | array |

###### components.schemas.ViewsForResponse.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewForResponse |

##### components.schemas.Webhook
| Property | Value |
| --- | --- |
| description | A webhook |
| properties | _object_ |
| required | [targetUrl] |
| type | object |

###### components.schemas.Webhook.properties
| Property | Value |
| --- | --- |
| description | _object_ |
| operations | _object_ |
| secret | _object_ |
| targetUrl | _object_ |

####### components.schemas.Webhook.properties.description
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.Webhook.properties.operations
| Property | Value |
| --- | --- |
| default | [*.*] |
| items | _object_ |
| type | array |

######## components.schemas.Webhook.properties.operations.items
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.Webhook.properties.secret
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.Webhook.properties.targetUrl
| Property | Value |
| --- | --- |
| type | string |

##### components.schemas.WebhookForResponse
| Property | Value |
| --- | --- |
| description | A webhook |
| properties | _object_ |
| type | object |

###### components.schemas.WebhookForResponse.properties
| Property | Value |
| --- | --- |
| createdAt | _object_ |
| deletedAt | _object_ |
| description | _object_ |
| id | _object_ |
| operations | _object_ |
| secret | _object_ |
| targetUrl | _object_ |
| updatedAt | _object_ |
| workspaceId | _object_ |

####### components.schemas.WebhookForResponse.properties.createdAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.WebhookForResponse.properties.deletedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.WebhookForResponse.properties.description
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.WebhookForResponse.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### components.schemas.WebhookForResponse.properties.operations
| Property | Value |
| --- | --- |
| items | _object_ |
| type | array |

######## components.schemas.WebhookForResponse.properties.operations.items
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.WebhookForResponse.properties.secret
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.WebhookForResponse.properties.targetUrl
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.WebhookForResponse.properties.updatedAt
| Property | Value |
| --- | --- |
| format | date-time |
| type | string |

####### components.schemas.WebhookForResponse.properties.workspaceId
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

##### components.schemas.WebhookForUpdate
| Property | Value |
| --- | --- |
| description | A webhook for update |
| properties | _object_ |
| type | object |

###### components.schemas.WebhookForUpdate.properties
| Property | Value |
| --- | --- |
| description | _object_ |
| operations | _object_ |
| secret | _object_ |
| targetUrl | _object_ |

####### components.schemas.WebhookForUpdate.properties.description
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.WebhookForUpdate.properties.operations
| Property | Value |
| --- | --- |
| default | [] |
| items | _object_ |
| type | array |

######## components.schemas.WebhookForUpdate.properties.operations.items
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.WebhookForUpdate.properties.secret
| Property | Value |
| --- | --- |
| type | string |

####### components.schemas.WebhookForUpdate.properties.targetUrl
| Property | Value |
| --- | --- |
| type | string |

##### components.schemas.Webhooks
| Property | Value |
| --- | --- |
| description | A list of webhooks |
| items | _object_ |
| type | array |

###### components.schemas.Webhooks.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/Webhook |

##### components.schemas.WebhooksForResponse
| Property | Value |
| --- | --- |
| description | A list of webhooks |
| items | _object_ |
| type | array |

###### components.schemas.WebhooksForResponse.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/WebhookForResponse |

#### components.securitySchemes
| Property | Value |
| --- | --- |
| bearerAuth | _object_ |

##### components.securitySchemes.bearerAuth
| Property | Value |
| --- | --- |
| bearerFormat | JWT |
| description | Enter the token with the `Bearer: ` prefix, e.g. "Bearer abcde12345". |
| scheme | bearer |
| type | http |

### externalDocs
| Property | Value |
| --- | --- |
| description | Find out more about **Twenty** |
| url | https://twenty.com |

### info
| Property | Value |
| --- | --- |
| contact | _object_ |
| description | Use this page to explore and call the **REST API**. <br><br>## Authentication<br><br>Send a Bearer token with each request:<br><br>```http<br>Authorization: Bearer <token><br>```<br><br>Example cURL:<br><br>```bash<br>curl -H 'Authorization: Bearer <token>' <server>/rest/core/companies<br>```<br><br>Tokens can be generated in Settings → Playground and are workspace-scoped.<br><br><br>## Filters<br><br>Use the `filter` query parameter to narrow results.<br><br>- Format: `field[COMPARATOR]:value`<br>- Multiple conditions: `field1[eq]:1,field2[gte]:10` (root conjunction is AND)<br>- Composite fields: `field.subField[COMPARATOR]:value`<br>- Common comparators: `eq`, `neq`, `in`, `containsAny`, `is`, `gt`, `gte`, `lt`, `lte`, `startsWith`, `like`, `ilike`<br><br>Examples:<br><br>```text<br>filter=status[eq]:"open"<br>filter=createdAt[gte]:"2024-01-01"<br>filter=owner.name[ilike]:"%smith%"<br>filter=id[in]:["id-1","id-2"]<br>filter=deletedAt[is]:NULL<br>filter=isActive[eq]:true<br>```<br><br>Advanced (optional): `and(...)`, `or(...)`, `not(...)` (`not` wraps one condition)<br><br>```text<br>filter=or(status[eq]:"open",assigneeId[is]:NULL)<br>```<br><br>Notes: Strings and dates are quoted; numbers are not.<br><br>## Pagination and ordering<br><br>All list endpoints use cursor-based pagination.<br><br>- Use **limit** to cap page size (default: 60, max: 60).<br>- Use **starting_after** to fetch the next page (forward).<br>- Use **ending_before** to fetch the previous page (backward).<br>- Responses include **pageInfo** with `hasNextPage`, `startCursor`, and `endCursor`.<br><br>Examples:<br><br>```bash<br># First page<br>curl -H 'Authorization: Bearer <token>' \<br>  '<server>/rest/core/companies?limit=60'<br><br># Next page<br>curl -H 'Authorization: Bearer <token>' \<br>  '<server>/rest/core/companies?limit=60&starting_after=<endCursorFromPreviousPage>'<br><br># Previous page<br>curl -H 'Authorization: Bearer <token>' \<br>  '<server>/rest/core/companies?limit=60&ending_before=<startCursorFromCurrentPage>'<br>```<br><br>You can combine pagination with filters and ordering.<br><br>Ordering with `order_by`:<br>- Shape: `field1,field2[DIRECTION2]`<br>- Directions: AscNullsFirst, AscNullsLast, DescNullsFirst, DescNullsLast<br>- Default per-field direction: AscNullsFirst<br><br>Examples:<br>```text<br>order_by=createdAt<br>order_by=id[AscNullsFirst],createdAt[DescNullsLast]<br>```<br><br>## Usage with LLMs<br><br>You can use AI to generate code based on the OpenAPI schema with the following URLs:<br><br>```text<br>Core: https://crm.quikturn.io/rest/open-api/core?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NmY2NmI3Ny0yODFlLTQ2ZjAtOWIzYy0zNjFhMDBlMWYyMWEiLCJ0eXBlIjoiQVBJX0tFWSIsIndvcmtzcGFjZUlkIjoiOTZmNjZiNzctMjgxZS00NmYwLTliM2MtMzYxYTAwZTFmMjFhIiwiaWF0IjoxNzYxMzY3MzE4LCJleHAiOjQ5MTQ5NjczMTcsImp0aSI6IjE2ZTVlZTBlLTdmYzQtNGUwNC1iOGRmLTYxZDBkYjBmNTBiNiJ9.ofNFwK_FapFJZ5VWuzjdgDA_VsTdKU0ikeVxeUjb7Fw<br>Metadata: https://crm.quikturn.io/rest/open-api/metadata?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NmY2NmI3Ny0yODFlLTQ2ZjAtOWIzYy0zNjFhMDBlMWYyMWEiLCJ0eXBlIjoiQVBJX0tFWSIsIndvcmtzcGFjZUlkIjoiOTZmNjZiNzctMjgxZS00NmYwLTliM2MtMzYxYTAwZTFmMjFhIiwiaWF0IjoxNzYxMzY3MzE4LCJleHAiOjQ5MTQ5NjczMTcsImp0aSI6IjE2ZTVlZTBlLTdmYzQtNGUwNC1iOGRmLTYxZDBkYjBmNTBiNiJ9.ofNFwK_FapFJZ5VWuzjdgDA_VsTdKU0ikeVxeUjb7Fw<br>```<br><br>Quick prompt example (Cursor or any agent):<br><br>```text<br>Here is an OpenAPI schema for the Twenty REST API:<br>https://crm.quikturn.io/rest/open-api/core?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NmY2NmI3Ny0yODFlLTQ2ZjAtOWIzYy0zNjFhMDBlMWYyMWEiLCJ0eXBlIjoiQVBJX0tFWSIsIndvcmtzcGFjZUlkIjoiOTZmNjZiNzctMjgxZS00NmYwLTliM2MtMzYxYTAwZTFmMjFhIiwiaWF0IjoxNzYxMzY3MzE4LCJleHAiOjQ5MTQ5NjczMTcsImp0aSI6IjE2ZTVlZTBlLTdmYzQtNGUwNC1iOGRmLTYxZDBkYjBmNTBiNiJ9.ofNFwK_FapFJZ5VWuzjdgDA_VsTdKU0ikeVxeUjb7Fw<br><br>Use it to list companies created after 2024-01-01, ordered by createdAt desc, and include only 20 results.<br>```<br><br>Notes:<br>- Treat the token like a secret; prefer a short-lived Playground token.<br>- Most editors can fetch and process the schema even if it's large.<br> |
| license | _object_ |
| termsOfService | https://github.com/twentyhq/twenty?tab=coc-ov-file#readme |
| title | Twenty Api |
| version | v0.1 |

#### info.contact
| Property | Value |
| --- | --- |
| email | felix@twenty.com |

#### info.license
| Property | Value |
| --- | --- |
| name | AGPL-3.0 |
| url | https://github.com/twentyhq/twenty?tab=License-1-ov-file#readme |

### paths
| Property | Value |
| --- | --- |
| /apiKeys | _object_ |
| /apiKeys/{id} | _object_ |
| /fields | _object_ |
| /fields/{id} | _object_ |
| /objects | _object_ |
| /objects/{id} | _object_ |
| /open-api/metadata | _object_ |
| /viewFields | _object_ |
| /viewFields/{id} | _object_ |
| /viewFilterGroups | _object_ |
| /viewFilterGroups/{id} | _object_ |
| /viewFilters | _object_ |
| /viewFilters/{id} | _object_ |
| /viewGroups | _object_ |
| /viewGroups/{id} | _object_ |
| /viewSorts | _object_ |
| /viewSorts/{id} | _object_ |
| /views | _object_ |
| /views/{id} | _object_ |
| /webhooks | _object_ |
| /webhooks/{id} | _object_ |

#### paths./apiKeys
| Property | Value |
| --- | --- |
| get | _object_ |
| post | _object_ |

##### paths./apiKeys.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find Many apiKeys |
| tags | [apiKeys] |

###### paths./apiKeys.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/limit |
| 2 | #/components/parameters/startingAfter |
| 3 | #/components/parameters/endingBefore |

###### paths./apiKeys.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./apiKeys.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./apiKeys.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./apiKeys.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./apiKeys.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./apiKeys.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |
| pageInfo | _object_ |

############ paths./apiKeys.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./apiKeys.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| apiKeys | _object_ |

############## paths./apiKeys.get.responses.200.content.application/json.schema.properties.data.properties.apiKeys
| Property | Value |
| --- | --- |
| items | _object_ |
| type | array |

############### paths./apiKeys.get.responses.200.content.application/json.schema.properties.data.properties.apiKeys.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ApiKeyForResponse |

############ paths./apiKeys.get.responses.200.content.application/json.schema.properties.pageInfo
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./apiKeys.get.responses.200.content.application/json.schema.properties.pageInfo.properties
| Property | Value |
| --- | --- |
| endCursor | _object_ |
| hasNextPage | _object_ |
| startCursor | _object_ |

############## paths./apiKeys.get.responses.200.content.application/json.schema.properties.pageInfo.properties.endCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

############## paths./apiKeys.get.responses.200.content.application/json.schema.properties.pageInfo.properties.hasNextPage
| Property | Value |
| --- | --- |
| type | boolean |

############## paths./apiKeys.get.responses.200.content.application/json.schema.properties.pageInfo.properties.startCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./apiKeys.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./apiKeys.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./apiKeys.post
| Property | Value |
| --- | --- |
| operationId | createOneApiKey |
| requestBody | _object_ |
| responses | _object_ |
| summary | Create One apiKey |
| tags | [apiKeys] |

###### paths./apiKeys.post.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./apiKeys.post.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./apiKeys.post.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./apiKeys.post.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ApiKey |

###### paths./apiKeys.post.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./apiKeys.post.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./apiKeys.post.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./apiKeys.post.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./apiKeys.post.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./apiKeys.post.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./apiKeys.post.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./apiKeys.post.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| createOneApiKey | _object_ |

############## paths./apiKeys.post.responses.200.content.application/json.schema.properties.data.properties.createOneApiKey
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ApiKeyForResponse |

####### paths./apiKeys.post.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./apiKeys.post.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./apiKeys/{id}
| Property | Value |
| --- | --- |
| delete | _object_ |
| get | _object_ |
| patch | _object_ |

##### paths./apiKeys/{id}.delete
| Property | Value |
| --- | --- |
| operationId | deleteOneApiKey |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Delete One apiKey |
| tags | [apiKeys] |

###### paths./apiKeys/{id}.delete.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./apiKeys/{id}.delete.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./apiKeys/{id}.delete.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./apiKeys/{id}.delete.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./apiKeys/{id}.delete.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./apiKeys/{id}.delete.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./apiKeys/{id}.delete.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./apiKeys/{id}.delete.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./apiKeys/{id}.delete.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| deleteOneApiKey | _object_ |

############## paths./apiKeys/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneApiKey
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############### paths./apiKeys/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneApiKey.properties
| Property | Value |
| --- | --- |
| id | _object_ |

################ paths./apiKeys/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneApiKey.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./apiKeys/{id}.delete.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./apiKeys/{id}.delete.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./apiKeys/{id}.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find One apiKey |
| tags | [apiKeys] |

###### paths./apiKeys/{id}.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./apiKeys/{id}.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./apiKeys/{id}.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./apiKeys/{id}.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./apiKeys/{id}.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./apiKeys/{id}.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./apiKeys/{id}.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./apiKeys/{id}.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./apiKeys/{id}.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| apiKey | _object_ |

############## paths./apiKeys/{id}.get.responses.200.content.application/json.schema.properties.data.properties.apiKey
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ApiKeyForResponse |

####### paths./apiKeys/{id}.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./apiKeys/{id}.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./apiKeys/{id}.patch
| Property | Value |
| --- | --- |
| operationId | updateOneApiKey |
| parameters | _complex array_ |
| requestBody | _object_ |
| responses | _object_ |
| summary | Update One apiKey |
| tags | [apiKeys] |

###### paths./apiKeys/{id}.patch.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./apiKeys/{id}.patch.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./apiKeys/{id}.patch.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./apiKeys/{id}.patch.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./apiKeys/{id}.patch.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ApiKeyForUpdate |

###### paths./apiKeys/{id}.patch.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./apiKeys/{id}.patch.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./apiKeys/{id}.patch.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./apiKeys/{id}.patch.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./apiKeys/{id}.patch.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./apiKeys/{id}.patch.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./apiKeys/{id}.patch.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./apiKeys/{id}.patch.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| updateOneApiKey | _object_ |

############## paths./apiKeys/{id}.patch.responses.200.content.application/json.schema.properties.data.properties.updateOneApiKey
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ApiKeyForResponse |

####### paths./apiKeys/{id}.patch.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./apiKeys/{id}.patch.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./fields
| Property | Value |
| --- | --- |
| get | _object_ |
| post | _object_ |

##### paths./fields.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find Many fields |
| tags | [fields] |

###### paths./fields.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/limit |
| 2 | #/components/parameters/startingAfter |
| 3 | #/components/parameters/endingBefore |

###### paths./fields.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./fields.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./fields.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./fields.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./fields.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./fields.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |
| pageInfo | _object_ |

############ paths./fields.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./fields.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| fields | _object_ |

############## paths./fields.get.responses.200.content.application/json.schema.properties.data.properties.fields
| Property | Value |
| --- | --- |
| items | _object_ |
| type | array |

############### paths./fields.get.responses.200.content.application/json.schema.properties.data.properties.fields.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/FieldForResponse |

############ paths./fields.get.responses.200.content.application/json.schema.properties.pageInfo
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./fields.get.responses.200.content.application/json.schema.properties.pageInfo.properties
| Property | Value |
| --- | --- |
| endCursor | _object_ |
| hasNextPage | _object_ |
| startCursor | _object_ |

############## paths./fields.get.responses.200.content.application/json.schema.properties.pageInfo.properties.endCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

############## paths./fields.get.responses.200.content.application/json.schema.properties.pageInfo.properties.hasNextPage
| Property | Value |
| --- | --- |
| type | boolean |

############## paths./fields.get.responses.200.content.application/json.schema.properties.pageInfo.properties.startCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./fields.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./fields.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./fields.post
| Property | Value |
| --- | --- |
| operationId | createOneField |
| requestBody | _object_ |
| responses | _object_ |
| summary | Create One field |
| tags | [fields] |

###### paths./fields.post.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./fields.post.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./fields.post.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./fields.post.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/Field |

###### paths./fields.post.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./fields.post.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./fields.post.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./fields.post.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./fields.post.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./fields.post.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./fields.post.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./fields.post.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| createOneField | _object_ |

############## paths./fields.post.responses.200.content.application/json.schema.properties.data.properties.createOneField
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/FieldForResponse |

####### paths./fields.post.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./fields.post.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./fields/{id}
| Property | Value |
| --- | --- |
| delete | _object_ |
| get | _object_ |
| patch | _object_ |

##### paths./fields/{id}.delete
| Property | Value |
| --- | --- |
| operationId | deleteOneField |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Delete One field |
| tags | [fields] |

###### paths./fields/{id}.delete.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./fields/{id}.delete.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./fields/{id}.delete.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./fields/{id}.delete.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./fields/{id}.delete.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./fields/{id}.delete.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./fields/{id}.delete.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./fields/{id}.delete.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./fields/{id}.delete.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| deleteOneField | _object_ |

############## paths./fields/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneField
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############### paths./fields/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneField.properties
| Property | Value |
| --- | --- |
| id | _object_ |

################ paths./fields/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneField.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./fields/{id}.delete.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./fields/{id}.delete.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./fields/{id}.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find One field |
| tags | [fields] |

###### paths./fields/{id}.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./fields/{id}.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./fields/{id}.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./fields/{id}.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./fields/{id}.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./fields/{id}.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./fields/{id}.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./fields/{id}.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./fields/{id}.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| field | _object_ |

############## paths./fields/{id}.get.responses.200.content.application/json.schema.properties.data.properties.field
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/FieldForResponse |

####### paths./fields/{id}.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./fields/{id}.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./fields/{id}.patch
| Property | Value |
| --- | --- |
| operationId | updateOneField |
| parameters | _complex array_ |
| requestBody | _object_ |
| responses | _object_ |
| summary | Update One field |
| tags | [fields] |

###### paths./fields/{id}.patch.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./fields/{id}.patch.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./fields/{id}.patch.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./fields/{id}.patch.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./fields/{id}.patch.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/FieldForUpdate |

###### paths./fields/{id}.patch.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./fields/{id}.patch.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./fields/{id}.patch.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./fields/{id}.patch.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./fields/{id}.patch.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./fields/{id}.patch.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./fields/{id}.patch.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./fields/{id}.patch.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| updateOneField | _object_ |

############## paths./fields/{id}.patch.responses.200.content.application/json.schema.properties.data.properties.updateOneField
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/FieldForResponse |

####### paths./fields/{id}.patch.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./fields/{id}.patch.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./objects
| Property | Value |
| --- | --- |
| get | _object_ |
| post | _object_ |

##### paths./objects.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find Many objects |
| tags | [objects] |

###### paths./objects.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/limit |
| 2 | #/components/parameters/startingAfter |
| 3 | #/components/parameters/endingBefore |

###### paths./objects.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./objects.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./objects.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./objects.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./objects.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./objects.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |
| pageInfo | _object_ |

############ paths./objects.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./objects.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| objects | _object_ |

############## paths./objects.get.responses.200.content.application/json.schema.properties.data.properties.objects
| Property | Value |
| --- | --- |
| items | _object_ |
| type | array |

############### paths./objects.get.responses.200.content.application/json.schema.properties.data.properties.objects.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ObjectForResponse |

############ paths./objects.get.responses.200.content.application/json.schema.properties.pageInfo
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./objects.get.responses.200.content.application/json.schema.properties.pageInfo.properties
| Property | Value |
| --- | --- |
| endCursor | _object_ |
| hasNextPage | _object_ |
| startCursor | _object_ |

############## paths./objects.get.responses.200.content.application/json.schema.properties.pageInfo.properties.endCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

############## paths./objects.get.responses.200.content.application/json.schema.properties.pageInfo.properties.hasNextPage
| Property | Value |
| --- | --- |
| type | boolean |

############## paths./objects.get.responses.200.content.application/json.schema.properties.pageInfo.properties.startCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./objects.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./objects.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./objects.post
| Property | Value |
| --- | --- |
| operationId | createOneObject |
| requestBody | _object_ |
| responses | _object_ |
| summary | Create One object |
| tags | [objects] |

###### paths./objects.post.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./objects.post.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./objects.post.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./objects.post.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/Object |

###### paths./objects.post.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./objects.post.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./objects.post.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./objects.post.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./objects.post.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./objects.post.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./objects.post.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./objects.post.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| createOneObject | _object_ |

############## paths./objects.post.responses.200.content.application/json.schema.properties.data.properties.createOneObject
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ObjectForResponse |

####### paths./objects.post.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./objects.post.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./objects/{id}
| Property | Value |
| --- | --- |
| delete | _object_ |
| get | _object_ |
| patch | _object_ |

##### paths./objects/{id}.delete
| Property | Value |
| --- | --- |
| operationId | deleteOneObject |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Delete One object |
| tags | [objects] |

###### paths./objects/{id}.delete.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./objects/{id}.delete.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./objects/{id}.delete.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./objects/{id}.delete.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./objects/{id}.delete.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./objects/{id}.delete.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./objects/{id}.delete.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./objects/{id}.delete.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./objects/{id}.delete.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| deleteOneObject | _object_ |

############## paths./objects/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneObject
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############### paths./objects/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneObject.properties
| Property | Value |
| --- | --- |
| id | _object_ |

################ paths./objects/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneObject.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./objects/{id}.delete.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./objects/{id}.delete.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./objects/{id}.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find One object |
| tags | [objects] |

###### paths./objects/{id}.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./objects/{id}.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./objects/{id}.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./objects/{id}.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./objects/{id}.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./objects/{id}.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./objects/{id}.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./objects/{id}.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./objects/{id}.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| object | _object_ |

############## paths./objects/{id}.get.responses.200.content.application/json.schema.properties.data.properties.object
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ObjectForResponse |

####### paths./objects/{id}.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./objects/{id}.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./objects/{id}.patch
| Property | Value |
| --- | --- |
| operationId | updateOneObject |
| parameters | _complex array_ |
| requestBody | _object_ |
| responses | _object_ |
| summary | Update One object |
| tags | [objects] |

###### paths./objects/{id}.patch.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./objects/{id}.patch.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./objects/{id}.patch.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./objects/{id}.patch.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./objects/{id}.patch.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ObjectForUpdate |

###### paths./objects/{id}.patch.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./objects/{id}.patch.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./objects/{id}.patch.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./objects/{id}.patch.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./objects/{id}.patch.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./objects/{id}.patch.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./objects/{id}.patch.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./objects/{id}.patch.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| updateOneObject | _object_ |

############## paths./objects/{id}.patch.responses.200.content.application/json.schema.properties.data.properties.updateOneObject
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ObjectForResponse |

####### paths./objects/{id}.patch.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./objects/{id}.patch.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./open-api/metadata
| Property | Value |
| --- | --- |
| get | _object_ |

##### paths./open-api/metadata.get
| Property | Value |
| --- | --- |
| operationId | GetOpenApiSchema |
| responses | _object_ |
| servers | _complex array_ |
| summary | Get Open Api Schema |
| tags | [General] |

###### paths./open-api/metadata.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |

####### paths./open-api/metadata.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./open-api/metadata.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./open-api/metadata.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./open-api/metadata.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./open-api/metadata.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| components | _object_ |
| info | _object_ |
| openapi | _object_ |
| paths | _object_ |
| servers | _object_ |
| tags | _object_ |

############ paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.components
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.components.properties
| Property | Value |
| --- | --- |
| parameters | _object_ |
| responses | _object_ |
| schemas | _object_ |

############## paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.components.properties.parameters
| Property | Value |
| --- | --- |
| type | object |

############## paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.components.properties.responses
| Property | Value |
| --- | --- |
| type | object |

############## paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.components.properties.schemas
| Property | Value |
| --- | --- |
| type | object |

############ paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.info
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.info.properties
| Property | Value |
| --- | --- |
| contact | _object_ |
| description | _object_ |
| license | _object_ |
| termsOfService | _object_ |
| title | _object_ |

############## paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.info.properties.contact
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############### paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.info.properties.contact.properties
| Property | Value |
| --- | --- |
| email | _object_ |

################ paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.info.properties.contact.properties.email
| Property | Value |
| --- | --- |
| type | string |

############## paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.info.properties.description
| Property | Value |
| --- | --- |
| type | string |

############## paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.info.properties.license
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############### paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.info.properties.license.properties
| Property | Value |
| --- | --- |
| name | _object_ |
| url | _object_ |

################ paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.info.properties.license.properties.name
| Property | Value |
| --- | --- |
| type | string |

################ paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.info.properties.license.properties.url
| Property | Value |
| --- | --- |
| type | string |

############## paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.info.properties.termsOfService
| Property | Value |
| --- | --- |
| type | string |

############## paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.info.properties.title
| Property | Value |
| --- | --- |
| type | string |

############ paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.openapi
| Property | Value |
| --- | --- |
| type | string |

############ paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.paths
| Property | Value |
| --- | --- |
| type | object |

############ paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.servers
| Property | Value |
| --- | --- |
| items | _object_ |
| type | array |

############# paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.servers.items
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############## paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.servers.items.properties
| Property | Value |
| --- | --- |
| description | _object_ |
| url | _object_ |

############### paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.servers.items.properties.description
| Property | Value |
| --- | --- |
| type | string |

############### paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.servers.items.properties.url
| Property | Value |
| --- | --- |
| type | string |

############ paths./open-api/metadata.get.responses.200.content.application/json.schema.properties.tags
| Property | Value |
| --- | --- |
| type | object |

###### paths./open-api/metadata.get.servers
| # | url|
| --- | --- |
| 1 | https://crm.quikturn.io |

#### paths./viewFields
| Property | Value |
| --- | --- |
| get | _object_ |
| post | _object_ |

##### paths./viewFields.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find Many viewFields |
| tags | [viewFields] |

###### paths./viewFields.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/limit |
| 2 | #/components/parameters/startingAfter |
| 3 | #/components/parameters/endingBefore |

###### paths./viewFields.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFields.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFields.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFields.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFields.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFields.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |
| pageInfo | _object_ |

############ paths./viewFields.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFields.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| viewFields | _object_ |

############## paths./viewFields.get.responses.200.content.application/json.schema.properties.data.properties.viewFields
| Property | Value |
| --- | --- |
| items | _object_ |
| type | array |

############### paths./viewFields.get.responses.200.content.application/json.schema.properties.data.properties.viewFields.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFieldForResponse |

############ paths./viewFields.get.responses.200.content.application/json.schema.properties.pageInfo
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFields.get.responses.200.content.application/json.schema.properties.pageInfo.properties
| Property | Value |
| --- | --- |
| endCursor | _object_ |
| hasNextPage | _object_ |
| startCursor | _object_ |

############## paths./viewFields.get.responses.200.content.application/json.schema.properties.pageInfo.properties.endCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

############## paths./viewFields.get.responses.200.content.application/json.schema.properties.pageInfo.properties.hasNextPage
| Property | Value |
| --- | --- |
| type | boolean |

############## paths./viewFields.get.responses.200.content.application/json.schema.properties.pageInfo.properties.startCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./viewFields.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFields.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewFields.post
| Property | Value |
| --- | --- |
| operationId | createOneViewField |
| requestBody | _object_ |
| responses | _object_ |
| summary | Create One viewField |
| tags | [viewFields] |

###### paths./viewFields.post.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./viewFields.post.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./viewFields.post.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./viewFields.post.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewField |

###### paths./viewFields.post.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFields.post.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFields.post.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFields.post.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFields.post.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFields.post.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewFields.post.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFields.post.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| createOneViewField | _object_ |

############## paths./viewFields.post.responses.200.content.application/json.schema.properties.data.properties.createOneViewField
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFieldForResponse |

####### paths./viewFields.post.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFields.post.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./viewFields/{id}
| Property | Value |
| --- | --- |
| delete | _object_ |
| get | _object_ |
| patch | _object_ |

##### paths./viewFields/{id}.delete
| Property | Value |
| --- | --- |
| operationId | deleteOneViewField |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Delete One viewField |
| tags | [viewFields] |

###### paths./viewFields/{id}.delete.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewFields/{id}.delete.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFields/{id}.delete.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFields/{id}.delete.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFields/{id}.delete.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFields/{id}.delete.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFields/{id}.delete.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewFields/{id}.delete.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFields/{id}.delete.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| deleteOneViewField | _object_ |

############## paths./viewFields/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewField
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############### paths./viewFields/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewField.properties
| Property | Value |
| --- | --- |
| id | _object_ |

################ paths./viewFields/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewField.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./viewFields/{id}.delete.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFields/{id}.delete.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewFields/{id}.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find One viewField |
| tags | [viewFields] |

###### paths./viewFields/{id}.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewFields/{id}.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFields/{id}.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFields/{id}.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFields/{id}.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFields/{id}.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFields/{id}.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewFields/{id}.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFields/{id}.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| viewField | _object_ |

############## paths./viewFields/{id}.get.responses.200.content.application/json.schema.properties.data.properties.viewField
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFieldForResponse |

####### paths./viewFields/{id}.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFields/{id}.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewFields/{id}.patch
| Property | Value |
| --- | --- |
| operationId | updateOneViewField |
| parameters | _complex array_ |
| requestBody | _object_ |
| responses | _object_ |
| summary | Update One viewField |
| tags | [viewFields] |

###### paths./viewFields/{id}.patch.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewFields/{id}.patch.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./viewFields/{id}.patch.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./viewFields/{id}.patch.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./viewFields/{id}.patch.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFieldForUpdate |

###### paths./viewFields/{id}.patch.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFields/{id}.patch.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFields/{id}.patch.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFields/{id}.patch.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFields/{id}.patch.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFields/{id}.patch.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewFields/{id}.patch.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFields/{id}.patch.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| updateOneViewField | _object_ |

############## paths./viewFields/{id}.patch.responses.200.content.application/json.schema.properties.data.properties.updateOneViewField
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFieldForResponse |

####### paths./viewFields/{id}.patch.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFields/{id}.patch.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./viewFilterGroups
| Property | Value |
| --- | --- |
| get | _object_ |
| post | _object_ |

##### paths./viewFilterGroups.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find Many viewFilterGroups |
| tags | [viewFilterGroups] |

###### paths./viewFilterGroups.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/limit |
| 2 | #/components/parameters/startingAfter |
| 3 | #/components/parameters/endingBefore |

###### paths./viewFilterGroups.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFilterGroups.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFilterGroups.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFilterGroups.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFilterGroups.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFilterGroups.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |
| pageInfo | _object_ |

############ paths./viewFilterGroups.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFilterGroups.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| viewFilterGroups | _object_ |

############## paths./viewFilterGroups.get.responses.200.content.application/json.schema.properties.data.properties.viewFilterGroups
| Property | Value |
| --- | --- |
| items | _object_ |
| type | array |

############### paths./viewFilterGroups.get.responses.200.content.application/json.schema.properties.data.properties.viewFilterGroups.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilterGroupForResponse |

############ paths./viewFilterGroups.get.responses.200.content.application/json.schema.properties.pageInfo
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFilterGroups.get.responses.200.content.application/json.schema.properties.pageInfo.properties
| Property | Value |
| --- | --- |
| endCursor | _object_ |
| hasNextPage | _object_ |
| startCursor | _object_ |

############## paths./viewFilterGroups.get.responses.200.content.application/json.schema.properties.pageInfo.properties.endCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

############## paths./viewFilterGroups.get.responses.200.content.application/json.schema.properties.pageInfo.properties.hasNextPage
| Property | Value |
| --- | --- |
| type | boolean |

############## paths./viewFilterGroups.get.responses.200.content.application/json.schema.properties.pageInfo.properties.startCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./viewFilterGroups.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFilterGroups.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewFilterGroups.post
| Property | Value |
| --- | --- |
| operationId | createOneViewFilterGroup |
| requestBody | _object_ |
| responses | _object_ |
| summary | Create One viewFilterGroup |
| tags | [viewFilterGroups] |

###### paths./viewFilterGroups.post.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./viewFilterGroups.post.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./viewFilterGroups.post.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./viewFilterGroups.post.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilterGroup |

###### paths./viewFilterGroups.post.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFilterGroups.post.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFilterGroups.post.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFilterGroups.post.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFilterGroups.post.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFilterGroups.post.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewFilterGroups.post.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFilterGroups.post.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| createOneViewFilterGroup | _object_ |

############## paths./viewFilterGroups.post.responses.200.content.application/json.schema.properties.data.properties.createOneViewFilterGroup
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilterGroupForResponse |

####### paths./viewFilterGroups.post.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFilterGroups.post.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./viewFilterGroups/{id}
| Property | Value |
| --- | --- |
| delete | _object_ |
| get | _object_ |
| patch | _object_ |

##### paths./viewFilterGroups/{id}.delete
| Property | Value |
| --- | --- |
| operationId | deleteOneViewFilterGroup |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Delete One viewFilterGroup |
| tags | [viewFilterGroups] |

###### paths./viewFilterGroups/{id}.delete.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewFilterGroups/{id}.delete.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFilterGroups/{id}.delete.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFilterGroups/{id}.delete.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFilterGroups/{id}.delete.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFilterGroups/{id}.delete.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFilterGroups/{id}.delete.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewFilterGroups/{id}.delete.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFilterGroups/{id}.delete.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| deleteOneViewFilterGroup | _object_ |

############## paths./viewFilterGroups/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewFilterGroup
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############### paths./viewFilterGroups/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewFilterGroup.properties
| Property | Value |
| --- | --- |
| id | _object_ |

################ paths./viewFilterGroups/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewFilterGroup.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./viewFilterGroups/{id}.delete.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFilterGroups/{id}.delete.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewFilterGroups/{id}.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find One viewFilterGroup |
| tags | [viewFilterGroups] |

###### paths./viewFilterGroups/{id}.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewFilterGroups/{id}.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFilterGroups/{id}.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFilterGroups/{id}.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFilterGroups/{id}.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFilterGroups/{id}.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFilterGroups/{id}.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewFilterGroups/{id}.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFilterGroups/{id}.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| viewFilterGroup | _object_ |

############## paths./viewFilterGroups/{id}.get.responses.200.content.application/json.schema.properties.data.properties.viewFilterGroup
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilterGroupForResponse |

####### paths./viewFilterGroups/{id}.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFilterGroups/{id}.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewFilterGroups/{id}.patch
| Property | Value |
| --- | --- |
| operationId | updateOneViewFilterGroup |
| parameters | _complex array_ |
| requestBody | _object_ |
| responses | _object_ |
| summary | Update One viewFilterGroup |
| tags | [viewFilterGroups] |

###### paths./viewFilterGroups/{id}.patch.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewFilterGroups/{id}.patch.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./viewFilterGroups/{id}.patch.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./viewFilterGroups/{id}.patch.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./viewFilterGroups/{id}.patch.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilterGroupForUpdate |

###### paths./viewFilterGroups/{id}.patch.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFilterGroups/{id}.patch.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFilterGroups/{id}.patch.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFilterGroups/{id}.patch.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFilterGroups/{id}.patch.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFilterGroups/{id}.patch.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewFilterGroups/{id}.patch.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFilterGroups/{id}.patch.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| updateOneViewFilterGroup | _object_ |

############## paths./viewFilterGroups/{id}.patch.responses.200.content.application/json.schema.properties.data.properties.updateOneViewFilterGroup
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilterGroupForResponse |

####### paths./viewFilterGroups/{id}.patch.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFilterGroups/{id}.patch.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./viewFilters
| Property | Value |
| --- | --- |
| get | _object_ |
| post | _object_ |

##### paths./viewFilters.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find Many viewFilters |
| tags | [viewFilters] |

###### paths./viewFilters.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/limit |
| 2 | #/components/parameters/startingAfter |
| 3 | #/components/parameters/endingBefore |

###### paths./viewFilters.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFilters.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFilters.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFilters.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFilters.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFilters.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |
| pageInfo | _object_ |

############ paths./viewFilters.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFilters.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| viewFilters | _object_ |

############## paths./viewFilters.get.responses.200.content.application/json.schema.properties.data.properties.viewFilters
| Property | Value |
| --- | --- |
| items | _object_ |
| type | array |

############### paths./viewFilters.get.responses.200.content.application/json.schema.properties.data.properties.viewFilters.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilterForResponse |

############ paths./viewFilters.get.responses.200.content.application/json.schema.properties.pageInfo
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFilters.get.responses.200.content.application/json.schema.properties.pageInfo.properties
| Property | Value |
| --- | --- |
| endCursor | _object_ |
| hasNextPage | _object_ |
| startCursor | _object_ |

############## paths./viewFilters.get.responses.200.content.application/json.schema.properties.pageInfo.properties.endCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

############## paths./viewFilters.get.responses.200.content.application/json.schema.properties.pageInfo.properties.hasNextPage
| Property | Value |
| --- | --- |
| type | boolean |

############## paths./viewFilters.get.responses.200.content.application/json.schema.properties.pageInfo.properties.startCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./viewFilters.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFilters.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewFilters.post
| Property | Value |
| --- | --- |
| operationId | createOneViewFilter |
| requestBody | _object_ |
| responses | _object_ |
| summary | Create One viewFilter |
| tags | [viewFilters] |

###### paths./viewFilters.post.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./viewFilters.post.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./viewFilters.post.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./viewFilters.post.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilter |

###### paths./viewFilters.post.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFilters.post.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFilters.post.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFilters.post.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFilters.post.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFilters.post.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewFilters.post.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFilters.post.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| createOneViewFilter | _object_ |

############## paths./viewFilters.post.responses.200.content.application/json.schema.properties.data.properties.createOneViewFilter
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilterForResponse |

####### paths./viewFilters.post.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFilters.post.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./viewFilters/{id}
| Property | Value |
| --- | --- |
| delete | _object_ |
| get | _object_ |
| patch | _object_ |

##### paths./viewFilters/{id}.delete
| Property | Value |
| --- | --- |
| operationId | deleteOneViewFilter |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Delete One viewFilter |
| tags | [viewFilters] |

###### paths./viewFilters/{id}.delete.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewFilters/{id}.delete.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFilters/{id}.delete.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFilters/{id}.delete.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFilters/{id}.delete.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFilters/{id}.delete.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFilters/{id}.delete.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewFilters/{id}.delete.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFilters/{id}.delete.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| deleteOneViewFilter | _object_ |

############## paths./viewFilters/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewFilter
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############### paths./viewFilters/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewFilter.properties
| Property | Value |
| --- | --- |
| id | _object_ |

################ paths./viewFilters/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewFilter.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./viewFilters/{id}.delete.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFilters/{id}.delete.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewFilters/{id}.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find One viewFilter |
| tags | [viewFilters] |

###### paths./viewFilters/{id}.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewFilters/{id}.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFilters/{id}.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFilters/{id}.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFilters/{id}.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFilters/{id}.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFilters/{id}.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewFilters/{id}.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFilters/{id}.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| viewFilter | _object_ |

############## paths./viewFilters/{id}.get.responses.200.content.application/json.schema.properties.data.properties.viewFilter
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilterForResponse |

####### paths./viewFilters/{id}.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFilters/{id}.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewFilters/{id}.patch
| Property | Value |
| --- | --- |
| operationId | updateOneViewFilter |
| parameters | _complex array_ |
| requestBody | _object_ |
| responses | _object_ |
| summary | Update One viewFilter |
| tags | [viewFilters] |

###### paths./viewFilters/{id}.patch.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewFilters/{id}.patch.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./viewFilters/{id}.patch.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./viewFilters/{id}.patch.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./viewFilters/{id}.patch.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilterForUpdate |

###### paths./viewFilters/{id}.patch.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewFilters/{id}.patch.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewFilters/{id}.patch.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewFilters/{id}.patch.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewFilters/{id}.patch.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewFilters/{id}.patch.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewFilters/{id}.patch.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewFilters/{id}.patch.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| updateOneViewFilter | _object_ |

############## paths./viewFilters/{id}.patch.responses.200.content.application/json.schema.properties.data.properties.updateOneViewFilter
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewFilterForResponse |

####### paths./viewFilters/{id}.patch.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewFilters/{id}.patch.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./viewGroups
| Property | Value |
| --- | --- |
| get | _object_ |
| post | _object_ |

##### paths./viewGroups.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find Many viewGroups |
| tags | [viewGroups] |

###### paths./viewGroups.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/limit |
| 2 | #/components/parameters/startingAfter |
| 3 | #/components/parameters/endingBefore |

###### paths./viewGroups.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewGroups.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewGroups.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewGroups.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewGroups.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewGroups.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |
| pageInfo | _object_ |

############ paths./viewGroups.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewGroups.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| viewGroups | _object_ |

############## paths./viewGroups.get.responses.200.content.application/json.schema.properties.data.properties.viewGroups
| Property | Value |
| --- | --- |
| items | _object_ |
| type | array |

############### paths./viewGroups.get.responses.200.content.application/json.schema.properties.data.properties.viewGroups.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewGroupForResponse |

############ paths./viewGroups.get.responses.200.content.application/json.schema.properties.pageInfo
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewGroups.get.responses.200.content.application/json.schema.properties.pageInfo.properties
| Property | Value |
| --- | --- |
| endCursor | _object_ |
| hasNextPage | _object_ |
| startCursor | _object_ |

############## paths./viewGroups.get.responses.200.content.application/json.schema.properties.pageInfo.properties.endCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

############## paths./viewGroups.get.responses.200.content.application/json.schema.properties.pageInfo.properties.hasNextPage
| Property | Value |
| --- | --- |
| type | boolean |

############## paths./viewGroups.get.responses.200.content.application/json.schema.properties.pageInfo.properties.startCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./viewGroups.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewGroups.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewGroups.post
| Property | Value |
| --- | --- |
| operationId | createOneViewGroup |
| requestBody | _object_ |
| responses | _object_ |
| summary | Create One viewGroup |
| tags | [viewGroups] |

###### paths./viewGroups.post.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./viewGroups.post.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./viewGroups.post.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./viewGroups.post.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewGroup |

###### paths./viewGroups.post.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewGroups.post.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewGroups.post.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewGroups.post.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewGroups.post.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewGroups.post.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewGroups.post.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewGroups.post.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| createOneViewGroup | _object_ |

############## paths./viewGroups.post.responses.200.content.application/json.schema.properties.data.properties.createOneViewGroup
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewGroupForResponse |

####### paths./viewGroups.post.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewGroups.post.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./viewGroups/{id}
| Property | Value |
| --- | --- |
| delete | _object_ |
| get | _object_ |
| patch | _object_ |

##### paths./viewGroups/{id}.delete
| Property | Value |
| --- | --- |
| operationId | deleteOneViewGroup |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Delete One viewGroup |
| tags | [viewGroups] |

###### paths./viewGroups/{id}.delete.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewGroups/{id}.delete.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewGroups/{id}.delete.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewGroups/{id}.delete.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewGroups/{id}.delete.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewGroups/{id}.delete.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewGroups/{id}.delete.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewGroups/{id}.delete.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewGroups/{id}.delete.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| deleteOneViewGroup | _object_ |

############## paths./viewGroups/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewGroup
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############### paths./viewGroups/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewGroup.properties
| Property | Value |
| --- | --- |
| id | _object_ |

################ paths./viewGroups/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewGroup.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./viewGroups/{id}.delete.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewGroups/{id}.delete.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewGroups/{id}.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find One viewGroup |
| tags | [viewGroups] |

###### paths./viewGroups/{id}.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewGroups/{id}.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewGroups/{id}.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewGroups/{id}.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewGroups/{id}.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewGroups/{id}.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewGroups/{id}.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewGroups/{id}.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewGroups/{id}.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| viewGroup | _object_ |

############## paths./viewGroups/{id}.get.responses.200.content.application/json.schema.properties.data.properties.viewGroup
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewGroupForResponse |

####### paths./viewGroups/{id}.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewGroups/{id}.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewGroups/{id}.patch
| Property | Value |
| --- | --- |
| operationId | updateOneViewGroup |
| parameters | _complex array_ |
| requestBody | _object_ |
| responses | _object_ |
| summary | Update One viewGroup |
| tags | [viewGroups] |

###### paths./viewGroups/{id}.patch.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewGroups/{id}.patch.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./viewGroups/{id}.patch.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./viewGroups/{id}.patch.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./viewGroups/{id}.patch.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewGroupForUpdate |

###### paths./viewGroups/{id}.patch.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewGroups/{id}.patch.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewGroups/{id}.patch.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewGroups/{id}.patch.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewGroups/{id}.patch.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewGroups/{id}.patch.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewGroups/{id}.patch.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewGroups/{id}.patch.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| updateOneViewGroup | _object_ |

############## paths./viewGroups/{id}.patch.responses.200.content.application/json.schema.properties.data.properties.updateOneViewGroup
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewGroupForResponse |

####### paths./viewGroups/{id}.patch.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewGroups/{id}.patch.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./viewSorts
| Property | Value |
| --- | --- |
| get | _object_ |
| post | _object_ |

##### paths./viewSorts.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find Many viewSorts |
| tags | [viewSorts] |

###### paths./viewSorts.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/limit |
| 2 | #/components/parameters/startingAfter |
| 3 | #/components/parameters/endingBefore |

###### paths./viewSorts.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewSorts.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewSorts.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewSorts.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewSorts.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewSorts.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |
| pageInfo | _object_ |

############ paths./viewSorts.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewSorts.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| viewSorts | _object_ |

############## paths./viewSorts.get.responses.200.content.application/json.schema.properties.data.properties.viewSorts
| Property | Value |
| --- | --- |
| items | _object_ |
| type | array |

############### paths./viewSorts.get.responses.200.content.application/json.schema.properties.data.properties.viewSorts.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewSortForResponse |

############ paths./viewSorts.get.responses.200.content.application/json.schema.properties.pageInfo
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewSorts.get.responses.200.content.application/json.schema.properties.pageInfo.properties
| Property | Value |
| --- | --- |
| endCursor | _object_ |
| hasNextPage | _object_ |
| startCursor | _object_ |

############## paths./viewSorts.get.responses.200.content.application/json.schema.properties.pageInfo.properties.endCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

############## paths./viewSorts.get.responses.200.content.application/json.schema.properties.pageInfo.properties.hasNextPage
| Property | Value |
| --- | --- |
| type | boolean |

############## paths./viewSorts.get.responses.200.content.application/json.schema.properties.pageInfo.properties.startCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./viewSorts.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewSorts.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewSorts.post
| Property | Value |
| --- | --- |
| operationId | createOneViewSort |
| requestBody | _object_ |
| responses | _object_ |
| summary | Create One viewSort |
| tags | [viewSorts] |

###### paths./viewSorts.post.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./viewSorts.post.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./viewSorts.post.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./viewSorts.post.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewSort |

###### paths./viewSorts.post.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewSorts.post.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewSorts.post.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewSorts.post.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewSorts.post.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewSorts.post.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewSorts.post.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewSorts.post.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| createOneViewSort | _object_ |

############## paths./viewSorts.post.responses.200.content.application/json.schema.properties.data.properties.createOneViewSort
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewSortForResponse |

####### paths./viewSorts.post.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewSorts.post.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./viewSorts/{id}
| Property | Value |
| --- | --- |
| delete | _object_ |
| get | _object_ |
| patch | _object_ |

##### paths./viewSorts/{id}.delete
| Property | Value |
| --- | --- |
| operationId | deleteOneViewSort |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Delete One viewSort |
| tags | [viewSorts] |

###### paths./viewSorts/{id}.delete.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewSorts/{id}.delete.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewSorts/{id}.delete.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewSorts/{id}.delete.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewSorts/{id}.delete.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewSorts/{id}.delete.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewSorts/{id}.delete.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewSorts/{id}.delete.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewSorts/{id}.delete.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| deleteOneViewSort | _object_ |

############## paths./viewSorts/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewSort
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############### paths./viewSorts/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewSort.properties
| Property | Value |
| --- | --- |
| id | _object_ |

################ paths./viewSorts/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneViewSort.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./viewSorts/{id}.delete.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewSorts/{id}.delete.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewSorts/{id}.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find One viewSort |
| tags | [viewSorts] |

###### paths./viewSorts/{id}.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewSorts/{id}.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewSorts/{id}.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewSorts/{id}.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewSorts/{id}.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewSorts/{id}.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewSorts/{id}.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewSorts/{id}.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewSorts/{id}.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| viewSort | _object_ |

############## paths./viewSorts/{id}.get.responses.200.content.application/json.schema.properties.data.properties.viewSort
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewSortForResponse |

####### paths./viewSorts/{id}.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewSorts/{id}.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./viewSorts/{id}.patch
| Property | Value |
| --- | --- |
| operationId | updateOneViewSort |
| parameters | _complex array_ |
| requestBody | _object_ |
| responses | _object_ |
| summary | Update One viewSort |
| tags | [viewSorts] |

###### paths./viewSorts/{id}.patch.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./viewSorts/{id}.patch.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./viewSorts/{id}.patch.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./viewSorts/{id}.patch.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./viewSorts/{id}.patch.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewSortForUpdate |

###### paths./viewSorts/{id}.patch.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./viewSorts/{id}.patch.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./viewSorts/{id}.patch.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./viewSorts/{id}.patch.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./viewSorts/{id}.patch.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./viewSorts/{id}.patch.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./viewSorts/{id}.patch.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./viewSorts/{id}.patch.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| updateOneViewSort | _object_ |

############## paths./viewSorts/{id}.patch.responses.200.content.application/json.schema.properties.data.properties.updateOneViewSort
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewSortForResponse |

####### paths./viewSorts/{id}.patch.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./viewSorts/{id}.patch.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./views
| Property | Value |
| --- | --- |
| get | _object_ |
| post | _object_ |

##### paths./views.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find Many views |
| tags | [views] |

###### paths./views.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/limit |
| 2 | #/components/parameters/startingAfter |
| 3 | #/components/parameters/endingBefore |

###### paths./views.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./views.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./views.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./views.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./views.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./views.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |
| pageInfo | _object_ |

############ paths./views.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./views.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| views | _object_ |

############## paths./views.get.responses.200.content.application/json.schema.properties.data.properties.views
| Property | Value |
| --- | --- |
| items | _object_ |
| type | array |

############### paths./views.get.responses.200.content.application/json.schema.properties.data.properties.views.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewForResponse |

############ paths./views.get.responses.200.content.application/json.schema.properties.pageInfo
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./views.get.responses.200.content.application/json.schema.properties.pageInfo.properties
| Property | Value |
| --- | --- |
| endCursor | _object_ |
| hasNextPage | _object_ |
| startCursor | _object_ |

############## paths./views.get.responses.200.content.application/json.schema.properties.pageInfo.properties.endCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

############## paths./views.get.responses.200.content.application/json.schema.properties.pageInfo.properties.hasNextPage
| Property | Value |
| --- | --- |
| type | boolean |

############## paths./views.get.responses.200.content.application/json.schema.properties.pageInfo.properties.startCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./views.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./views.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./views.post
| Property | Value |
| --- | --- |
| operationId | createOneView |
| requestBody | _object_ |
| responses | _object_ |
| summary | Create One view |
| tags | [views] |

###### paths./views.post.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./views.post.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./views.post.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./views.post.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/View |

###### paths./views.post.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./views.post.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./views.post.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./views.post.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./views.post.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./views.post.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./views.post.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./views.post.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| createOneView | _object_ |

############## paths./views.post.responses.200.content.application/json.schema.properties.data.properties.createOneView
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewForResponse |

####### paths./views.post.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./views.post.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./views/{id}
| Property | Value |
| --- | --- |
| delete | _object_ |
| get | _object_ |
| patch | _object_ |

##### paths./views/{id}.delete
| Property | Value |
| --- | --- |
| operationId | deleteOneView |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Delete One view |
| tags | [views] |

###### paths./views/{id}.delete.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./views/{id}.delete.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./views/{id}.delete.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./views/{id}.delete.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./views/{id}.delete.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./views/{id}.delete.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./views/{id}.delete.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./views/{id}.delete.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./views/{id}.delete.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| deleteOneView | _object_ |

############## paths./views/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneView
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############### paths./views/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneView.properties
| Property | Value |
| --- | --- |
| id | _object_ |

################ paths./views/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneView.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./views/{id}.delete.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./views/{id}.delete.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./views/{id}.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find One view |
| tags | [views] |

###### paths./views/{id}.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./views/{id}.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./views/{id}.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./views/{id}.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./views/{id}.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./views/{id}.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./views/{id}.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./views/{id}.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./views/{id}.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| view | _object_ |

############## paths./views/{id}.get.responses.200.content.application/json.schema.properties.data.properties.view
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewForResponse |

####### paths./views/{id}.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./views/{id}.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./views/{id}.patch
| Property | Value |
| --- | --- |
| operationId | updateOneView |
| parameters | _complex array_ |
| requestBody | _object_ |
| responses | _object_ |
| summary | Update One view |
| tags | [views] |

###### paths./views/{id}.patch.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./views/{id}.patch.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./views/{id}.patch.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./views/{id}.patch.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./views/{id}.patch.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewForUpdate |

###### paths./views/{id}.patch.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./views/{id}.patch.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./views/{id}.patch.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./views/{id}.patch.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./views/{id}.patch.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./views/{id}.patch.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./views/{id}.patch.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./views/{id}.patch.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| updateOneView | _object_ |

############## paths./views/{id}.patch.responses.200.content.application/json.schema.properties.data.properties.updateOneView
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/ViewForResponse |

####### paths./views/{id}.patch.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./views/{id}.patch.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./webhooks
| Property | Value |
| --- | --- |
| get | _object_ |
| post | _object_ |

##### paths./webhooks.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find Many webhooks |
| tags | [webhooks] |

###### paths./webhooks.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/limit |
| 2 | #/components/parameters/startingAfter |
| 3 | #/components/parameters/endingBefore |

###### paths./webhooks.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./webhooks.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./webhooks.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./webhooks.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./webhooks.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./webhooks.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |
| pageInfo | _object_ |

############ paths./webhooks.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./webhooks.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| webhooks | _object_ |

############## paths./webhooks.get.responses.200.content.application/json.schema.properties.data.properties.webhooks
| Property | Value |
| --- | --- |
| items | _object_ |
| type | array |

############### paths./webhooks.get.responses.200.content.application/json.schema.properties.data.properties.webhooks.items
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/WebhookForResponse |

############ paths./webhooks.get.responses.200.content.application/json.schema.properties.pageInfo
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./webhooks.get.responses.200.content.application/json.schema.properties.pageInfo.properties
| Property | Value |
| --- | --- |
| endCursor | _object_ |
| hasNextPage | _object_ |
| startCursor | _object_ |

############## paths./webhooks.get.responses.200.content.application/json.schema.properties.pageInfo.properties.endCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

############## paths./webhooks.get.responses.200.content.application/json.schema.properties.pageInfo.properties.hasNextPage
| Property | Value |
| --- | --- |
| type | boolean |

############## paths./webhooks.get.responses.200.content.application/json.schema.properties.pageInfo.properties.startCursor
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./webhooks.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./webhooks.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./webhooks.post
| Property | Value |
| --- | --- |
| operationId | createOneWebhook |
| requestBody | _object_ |
| responses | _object_ |
| summary | Create One webhook |
| tags | [webhooks] |

###### paths./webhooks.post.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./webhooks.post.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./webhooks.post.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./webhooks.post.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/Webhook |

###### paths./webhooks.post.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./webhooks.post.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./webhooks.post.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./webhooks.post.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./webhooks.post.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./webhooks.post.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./webhooks.post.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./webhooks.post.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| createOneWebhook | _object_ |

############## paths./webhooks.post.responses.200.content.application/json.schema.properties.data.properties.createOneWebhook
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/WebhookForResponse |

####### paths./webhooks.post.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./webhooks.post.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

#### paths./webhooks/{id}
| Property | Value |
| --- | --- |
| delete | _object_ |
| get | _object_ |
| patch | _object_ |

##### paths./webhooks/{id}.delete
| Property | Value |
| --- | --- |
| operationId | deleteOneWebhook |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Delete One webhook |
| tags | [webhooks] |

###### paths./webhooks/{id}.delete.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./webhooks/{id}.delete.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./webhooks/{id}.delete.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./webhooks/{id}.delete.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./webhooks/{id}.delete.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./webhooks/{id}.delete.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./webhooks/{id}.delete.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./webhooks/{id}.delete.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./webhooks/{id}.delete.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| deleteOneWebhook | _object_ |

############## paths./webhooks/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneWebhook
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############### paths./webhooks/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneWebhook.properties
| Property | Value |
| --- | --- |
| id | _object_ |

################ paths./webhooks/{id}.delete.responses.200.content.application/json.schema.properties.data.properties.deleteOneWebhook.properties.id
| Property | Value |
| --- | --- |
| format | uuid |
| type | string |

####### paths./webhooks/{id}.delete.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./webhooks/{id}.delete.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./webhooks/{id}.get
| Property | Value |
| --- | --- |
| parameters | _complex array_ |
| responses | _object_ |
| summary | Find One webhook |
| tags | [webhooks] |

###### paths./webhooks/{id}.get.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./webhooks/{id}.get.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./webhooks/{id}.get.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./webhooks/{id}.get.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./webhooks/{id}.get.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./webhooks/{id}.get.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./webhooks/{id}.get.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./webhooks/{id}.get.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./webhooks/{id}.get.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| webhook | _object_ |

############## paths./webhooks/{id}.get.responses.200.content.application/json.schema.properties.data.properties.webhook
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/WebhookForResponse |

####### paths./webhooks/{id}.get.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./webhooks/{id}.get.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

##### paths./webhooks/{id}.patch
| Property | Value |
| --- | --- |
| operationId | updateOneWebhook |
| parameters | _complex array_ |
| requestBody | _object_ |
| responses | _object_ |
| summary | Update One webhook |
| tags | [webhooks] |

###### paths./webhooks/{id}.patch.parameters
| # | $ref|
| --- | --- |
| 1 | #/components/parameters/idPath |

###### paths./webhooks/{id}.patch.requestBody
| Property | Value |
| --- | --- |
| content | _object_ |
| description | body |
| required | true |

####### paths./webhooks/{id}.patch.requestBody.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######## paths./webhooks/{id}.patch.requestBody.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

######### paths./webhooks/{id}.patch.requestBody.content.application/json.schema
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/WebhookForUpdate |

###### paths./webhooks/{id}.patch.responses
| Property | Value |
| --- | --- |
| 200 | _object_ |
| 400 | _object_ |
| 401 | _object_ |

####### paths./webhooks/{id}.patch.responses.200
| Property | Value |
| --- | --- |
| content | _object_ |
| description | Successful operation |

######## paths./webhooks/{id}.patch.responses.200.content
| Property | Value |
| --- | --- |
| application/json | _object_ |

######### paths./webhooks/{id}.patch.responses.200.content.application/json
| Property | Value |
| --- | --- |
| schema | _object_ |

########## paths./webhooks/{id}.patch.responses.200.content.application/json.schema
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

########### paths./webhooks/{id}.patch.responses.200.content.application/json.schema.properties
| Property | Value |
| --- | --- |
| data | _object_ |

############ paths./webhooks/{id}.patch.responses.200.content.application/json.schema.properties.data
| Property | Value |
| --- | --- |
| properties | _object_ |
| type | object |

############# paths./webhooks/{id}.patch.responses.200.content.application/json.schema.properties.data.properties
| Property | Value |
| --- | --- |
| updateOneWebhook | _object_ |

############## paths./webhooks/{id}.patch.responses.200.content.application/json.schema.properties.data.properties.updateOneWebhook
| Property | Value |
| --- | --- |
| $ref | #/components/schemas/WebhookForResponse |

####### paths./webhooks/{id}.patch.responses.400
| Property | Value |
| --- | --- |
| $ref | #/components/responses/400 |

####### paths./webhooks/{id}.patch.responses.401
| Property | Value |
| --- | --- |
| $ref | #/components/responses/401 |

### security
| # | bearerAuth|
| --- | --- |
| 1 | [] |

### servers
| # | description| url|
| --- | --- | --- |
| 1 | Production Development | https://crm.quikturn.io/rest/metadata |

### tags
| # | description| name|
| --- | --- | --- |
| 1 | General requests | General |
| 2 | Object `Objects` | objects |
| 3 | Object `Fields` | fields |
| 4 | Object `Webhooks` | webhooks |
| 5 | Object `ApiKeys` | apiKeys |
| 6 | Object `Views` | views |
| 7 | Object `ViewFields` | viewFields |
| 8 | Object `ViewFilters` | viewFilters |
| 9 | Object `ViewSorts` | viewSorts |
| 10 | Object `ViewGroups` | viewGroups |
| 11 | Object `ViewFilterGroups` | viewFilterGroups |