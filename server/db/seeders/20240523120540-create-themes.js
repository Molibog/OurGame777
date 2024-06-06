'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          title: 'Угадай мультфильм по кадру',
          img: 'https://tlum.ru/uploads/8681c29023aa16fb7f25448eb90dbec1d4488ad33a9cbf6f6f7fdc5431064e13.jpeg',
        },
        {
          title: 'Угадай фильм по кадру',
          img: 'https://i0.wp.com/techcraftools.ru/wp-content/uploads/2022/08/collage1jpg-b4e70efba9342e37.jpg?fit=1200%2C900&ssl=1',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
