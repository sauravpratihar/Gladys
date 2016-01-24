/**
* Device.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      
      name:{
        type: 'string'
      },
      
      protocol: {
        type:'string',
        required: true
      },
      
      room: {
          model: 'Room',
          required: true
      }

  }
};
