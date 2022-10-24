const faker = require('faker');
const fs = require('fs');
faker.locale = 'en';

function randomThingsToSeeList(destinationList) {
  if (destinationList.length <= 0) return;

  const thingsToSeeList = [];
  destinationList.forEach((destination) => {
    const thingsToSee = {
      idDestination: destination.id,
      id: faker.datatype.uuid(),
      national: destination.national,
      title: `welcome to ${destination.national} travel guide`,
      description: faker.lorem.paragraph(8),
      titleList: `things to see and do in ${destination.national}`,
      list: [
        faker.lorem.sentence(3),
        faker.lorem.sentence(3),
        faker.lorem.sentence(3),
        faker.lorem.sentence(4),
        faker.lorem.sentence(4),
        faker.lorem.sentence(4),
      ],
      img1: 'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/h2-destination-2-img-1.jpg',
      img2: 'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/h2-destination-2-img-2.jpg',
    };

    thingsToSeeList.push(thingsToSee);
  });

  return thingsToSeeList;
}

function randomTypicalCostList(destinationList) {
  if (destinationList.length <= 0) return;

  const typicalCostList = [];
  destinationList.forEach((destination) => {
    const item = {
      idDestination: destination.id,
      id: faker.datatype.uuid(),
      accommodation: faker.lorem.paragraphs(4),
      food: faker.lorem.paragraphs(4),
      transportation: faker.lorem.paragraphs(4),
      suggestedDailyBudget:
        '50-60 EUR / 52-62 USD (Note: This is a suggested budget assuming you’re staying in a hostel, eating out a little, cooking most of your meals, and using local transportation. Using the budget tips below, you can always lower this number. However, if you stay in fancier accommodation or eat out more often, expect this to be higher!)',
      typicalCostImg:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/h2-destination-2-img-5.jpg',
    };

    typicalCostList.push(item);
  });

  return typicalCostList;
}

function randomBudgetTipList(destinationList) {
  if (destinationList.length <= 0) return;

  const budgetTipList = [];
  destinationList.forEach((destination) => {
    const item = {
      idDestination: destination.id,
      id: faker.datatype.uuid(),
      getTheMenu: faker.lorem.paragraphs(1),
      rideWithUber: faker.lorem.paragraphs(1),
      getCityPasses: faker.lorem.paragraphs(1),
      couchsurf: faker.lorem.paragraphs(1),
    };

    budgetTipList.push(item);
  });

  return budgetTipList;
}

function randomRelatedArticleList(destinationList) {
  if (destinationList.length <= 0) return;

  const relatedArticleList = [];
  destinationList.forEach((destination) => {
    const item = {
      idDestination: destination.id,
      id: faker.datatype.uuid(),
      title: `what can i expect from ${destination.national}`,
      blogList: [],
      description1: faker.lorem.paragraphs(4),
      description2: faker.lorem.paragraphs(4),
      categories: destination.categories,
      hearts: 0,
      comments: 0,
      time: destination.createdAt,
    };

    relatedArticleList.push(item);
  });

  return relatedArticleList;
}

function randomCommentList(destinationList) {
  if (destinationList.length <= 0) return;

  const commentList = [];
  destinationList.forEach((destination) => {
    const item = {
      idDestination: destination.id,
      id: faker.datatype.uuid(),
      avatar: 'https://secure.gravatar.com/avatar/35abd0f841f006c1533f3d113ff172a9?s=96&d=mm&r=g',
      author: 'Khang Nguyen',
      content: faker.lorem.paragraphs(1),
      time: destination.createdAt,
    };

    commentList.push(item);
  });

  return commentList;
}

(() => {
  const destinationList = [
    {
      thumbnail:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/spain-single-2-2.jpg',
      imgMap:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/spain-img.png',
      national: 'spain',
      categories: ['fishing', 'overnight'],
      createdAt: 1666554133234,
      updatedAt: 1666554133234,
      id: 1,
    },
    {
      thumbnail:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/h2-destination-2-img-2-1.jpg',
      imgMap:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/australia-map.png',
      national: 'australia',
      categories: ['camping', 'restaurants'],
      createdAt: 1666560266016,
      updatedAt: 1666560266016,
      id: 2,
    },
    {
      thumbnail:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/peru-destination.jpg',
      imgMap:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/peru-img.png',
      national: 'peru',
      categories: ['low budget'],
      createdAt: 1666560430339,
      updatedAt: 1666560430339,
      id: 3,
    },
    {
      thumbnail:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-single-2-2.jpg',
      imgMap:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/brazil-img-1.png',
      national: 'brazil',
      categories: ['beaches', 'photography'],
      createdAt: 1666560601997,
      updatedAt: 1666560601997,
      id: 4,
    },
    {
      thumbnail:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/h2-destination-1-img-2-2.jpg',
      imgMap: 'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/uk-img.png',
      national: 'united kingdom',
      categories: ['flights', 'guides'],
      createdAt: 1666560733674,
      updatedAt: 1666560733674,
      id: 5,
    },
    {
      thumbnail:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/h2-destination-3-img-2.jpg',
      imgMap:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/italy-img.png',
      national: 'italy',
      categories: ['flights', 'shopping'],
      createdAt: 1666560796293,
      updatedAt: 1666560796293,
      id: 6,
    },
    {
      thumbnail:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/india-destination-3.jpg',
      imgMap:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/08/india-img-2.png',
      national: 'india',
      categories: ['flights', 'beaches'],
      createdAt: 1666560942110,
      updatedAt: 1666560942110,
      id: 7,
    },
    {
      thumbnail:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/greece-destination-2.jpg',
      imgMap:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/greek-map1-4.png',
      national: 'greece',
      categories: ['flights', 'guides'],
      createdAt: 1666561006954,
      updatedAt: 1666561006954,
      id: 8,
    },
    {
      thumbnail:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/paris-destination-img.jpg',
      imgMap:
        'https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/france-img-3.png',
      national: 'france',
      categories: ['flights', 'guides'],
      createdAt: 1666561080305,
      updatedAt: 1666561080305,
      id: 9,
    },
  ];
  const thingsToSeeList = randomThingsToSeeList(destinationList);
  const typicalCostList = randomTypicalCostList(destinationList);
  //   const relatedGuideList = randomRelatedGuideList(destinationList);
  const budgetTipList = randomBudgetTipList(destinationList);
  const relatedArticleList = randomRelatedArticleList(destinationList);
  const commentList = randomCommentList(destinationList);

  const db = {
    'destination-list': destinationList,

    'things-to-see': thingsToSeeList,

    'typical-costs': typicalCostList,

    'budget-tips': budgetTipList,

    'related-guides': [],

    'related-articles': relatedArticleList,

    'comment-list': commentList,
  };

  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('generate data success fully');
  });
})();
