// source: xsuportal/services/audience/team_list.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.xsuportal.proto.services.audience.ListTeamsResponse', null, global);
goog.exportSymbol('proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xsuportal.proto.services.audience.ListTeamsResponse.repeatedFields_, null);
};
goog.inherits(proto.xsuportal.proto.services.audience.ListTeamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xsuportal.proto.services.audience.ListTeamsResponse.displayName = 'proto.xsuportal.proto.services.audience.ListTeamsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.repeatedFields_, null);
};
goog.inherits(proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.displayName = 'proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xsuportal.proto.services.audience.ListTeamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xsuportal.proto.services.audience.ListTeamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamsList: jspb.Message.toObjectList(msg.getTeamsList(),
    proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xsuportal.proto.services.audience.ListTeamsResponse}
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xsuportal.proto.services.audience.ListTeamsResponse;
  return proto.xsuportal.proto.services.audience.ListTeamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xsuportal.proto.services.audience.ListTeamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xsuportal.proto.services.audience.ListTeamsResponse}
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem;
      reader.readMessage(value,proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.deserializeBinaryFromReader);
      msg.addTeams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xsuportal.proto.services.audience.ListTeamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xsuportal.proto.services.audience.ListTeamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.prototype.toObject = function(opt_includeInstance) {
  return proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    memberNamesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    isStudent: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem}
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem;
  return proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem}
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTeamId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addMemberNames(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStudent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMemberNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getIsStudent();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional int64 team_id = 1;
 * @return {number}
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.prototype.getTeamId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem} returns this
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.prototype.setTeamId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem} returns this
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string member_names = 3;
 * @return {!Array<string>}
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.prototype.getMemberNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem} returns this
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.prototype.setMemberNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem} returns this
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.prototype.addMemberNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem} returns this
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.prototype.clearMemberNamesList = function() {
  return this.setMemberNamesList([]);
};


/**
 * optional bool is_student = 5;
 * @return {boolean}
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.prototype.getIsStudent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem} returns this
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem.prototype.setIsStudent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * repeated TeamListItem teams = 1;
 * @return {!Array<!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem>}
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.prototype.getTeamsList = function() {
  return /** @type{!Array<!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem, 1));
};


/**
 * @param {!Array<!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem>} value
 * @return {!proto.xsuportal.proto.services.audience.ListTeamsResponse} returns this
*/
proto.xsuportal.proto.services.audience.ListTeamsResponse.prototype.setTeamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem}
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.prototype.addTeams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.xsuportal.proto.services.audience.ListTeamsResponse.TeamListItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xsuportal.proto.services.audience.ListTeamsResponse} returns this
 */
proto.xsuportal.proto.services.audience.ListTeamsResponse.prototype.clearTeamsList = function() {
  return this.setTeamsList([]);
};


goog.object.extend(exports, proto.xsuportal.proto.services.audience);
