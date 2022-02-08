const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);


/**
 *  @description Root Route
 *  @method GET /
 */
 route.get('/admin', services.adminRoutesGet);

/**
 *  @description Root Route
 *  @method POST /
 */
route.post('/admin', services.adminRoutesPost);


/**
 *  @description add users
 *  @method POST /add-user
 */
route.post('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)

route.get('/posts',services.get_user)

// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route