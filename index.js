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