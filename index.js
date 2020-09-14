/**
 * @api {get} /user/:id 获取用户信息
 * @apiName 获取用户信息
 * @apiGroup User
 *
 * @apiParam {Number} id 用户id
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 *
 */


/**
 * @api {get} /delete/:id 删除用户信息
 * @apiName 删除用户
 * @apiGroup User
 *
 * @apiParam {Number} id 用户id
 *
 * @apiSuccess {Number} CODE 200
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "code": "200",
 *       "message": "成功啦"
 *     }
 *
 */


/**
 * @api {} 公用状态码200成功
 * @apiName 公用成功
 * @apiGroup common

 * @apiSuccess {Number} CODE 200
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true,
 *       "code": "200",
 *       "message": "成功"
 *     }
 *
 */

/**
 * @api {} 公用状态码200失败
 * @apiName 公用失败
 * @apiGroup common
 * @apiSuccess {Number} CODE 200
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": false,
 *       "code": "200",
 *       "message": "出错信息"
 *     }
 *
 */

/**
 * @api {} 公用状态码500
 * @apiName 服务器出错
 * @apiGroup common
 * @apiSuccess {Number} CODE 500
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": false,
 *       "code": "500",
 *       "message": "服务器出错信息"
 *     }
 */

/**
 * @api {} 公用状态码401
 * @apiName 登录超时
 * @apiGroup common
 * @apiSuccess {Number} CODE 401
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": false,
 *       "code": "401",
 *       "message": "登录信息超时"
 *     }
 */