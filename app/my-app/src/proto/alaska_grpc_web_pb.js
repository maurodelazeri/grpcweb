/* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for alaska
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

const grpc = {};
grpc.web = require("grpc-web");

var user_pb = require("./user_pb.js");
const proto = {};
proto.alaska = require("./alaska_pb.js");

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.alaska.AlaskaClient = function(hostname, credentials, options) {
  if (!options) options = {};
  options["format"] = "text";

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.alaska.AlaskaPromiseClient = function(hostname, credentials, options) {
  if (!options) options = {};
  options["format"] = "text";

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.alaska.LoginRequest,
 *   !proto.alaska.LoginResponse>}
 */
const methodInfo_Alaska_Login = new grpc.web.AbstractClientBase.MethodInfo(
  user_pb.LoginResponse,
  /** @param {!proto.alaska.LoginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  user_pb.LoginResponse.deserializeBinary
);

/**
 * @param {!proto.alaska.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.alaska.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.alaska.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.alaska.AlaskaClient.prototype.login = function(
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/alaska.Alaska/Login",
    request,
    metadata || {},
    methodInfo_Alaska_Login,
    callback
  );
};

/**
 * @param {!proto.alaska.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.alaska.LoginResponse>}
 *     A native promise that resolves to the response
 */
proto.alaska.AlaskaPromiseClient.prototype.login = function(request, metadata) {
  return this.client_.unaryCall(
    this.hostname_ + "/alaska.Alaska/Login",
    request,
    metadata || {},
    methodInfo_Alaska_Login
  );
};

module.exports = proto.alaska;
