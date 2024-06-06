'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          title: 'Угадай мультфильм по кадру',
          answer: 'Малыш и Карлсон',
          img: 'https://image.spletnik.ru/image/2024/02/09/KGym/original.webp',
          theme_id: 1,
        },
        {
          title: 'Угадай мультфильм по кадру',
          answer: 'Похождения императора',
          img: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-02/28/19/asset/buzzfeed-prod-web-10/sub-buzz-24739-1488329293-1.jpg',
          theme_id: 1,
        },
        {
          title: 'Угадай мультфильм по кадру',
          answer: 'Валли',
          img: 'https://abrakadabra.fun/uploads/posts/2022-01/1641930725_24-abrakadabra-fun-p-valli-kadri-iz-multfilma-47.jpg',
          theme_id: 1,
        },
        {
          title: 'Угадай мультфильм по кадру',
          answer: 'Элементарно',
          img: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1eHO60.img',
          theme_id: 1,
        },
        {
          title: 'Угадай мультфильм по кадру',
          answer: 'Моана',
          img: 'https://filmschoolrejects.com/wp-content/uploads/2017/10/sharkead-maui.jpg',
          theme_id: 1,
        },
        {
          title: 'Угадай мультфильм по кадру',
          answer: 'Аркейн',
          img: 'https://top10a.ru/wp-content/uploads/2022/01/screenshot_2-3.png',
          theme_id: 1,
        },

        {
          title: 'Угадай фильм по кадру',
          answer: 'Мстители',
          img: 'https://wl-adme.cf.tsp.li/resize/728x/webp/767/063/063b0c56908e10c967803ac28c.jpg.webp',
          theme_id: 2,
        },

        {
          title: 'Угадай фильм по кадру',
          answer: 'Настоящий детектив',
          img: 'https://cdn.fishki.net/upload/post/2021/09/16/3939429/ef2f77b9fc5ede86e70171c774bb564f.jpg',
          theme_id: 2,
        },

        {
          title: 'Угадай фильм по кадру',
          answer: 'Грязь',
          img: 'https://wl-adme.cf.tsp.li/resize/728x/webp/bc9/69c/b09e4a534886b6202310f95045.jpg.webp',
          theme_id: 2,
        },

        {
          title: 'Угадай фильм по кадру',
          answer: 'Остров проклятых',
          img: 'https://wl-adme.cf.tsp.li/resize/728x/webp/bf4/c73/9b3f3c50ce8b84ba3a13b0671c.jpg.webp',
          theme_id: 2,
        },

        {
          title: 'Угадай фильм по кадру',
          answer: 'Брюс Всемогущий',
          img: 'https://img.joinfo.com/i/2021/01/800x0/6003f3bf4435d.jpg',
          theme_id: 2,
        },
        {
          title: 'Угадай фильм по кадру',
          answer: 'Криминальное чтиво',
          img: 'https://wl-adme.cf.tsp.li/resize/728x/webp/b56/e2e/0c638e5ea1adcb0b6e81c115ec.jpg.webp',
          theme_id: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
