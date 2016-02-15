$(function() {
    
    
	$('.viewContainer').hide();
    
    //Create views
    //var startView = new StartView($('#startView'));
    //var selectDishView = new SelectDishView($('#findDishView'));
        
    $('#startView').show();
    
    $('#createDinner-button').on( "click", function() {
         $('#startView').hide();
         $('#findDishView').show();
         $('#sidebar-wrapper').show();
    });
    
    var createDishElement = function(name, image, idElem) {
        
        var html = '<div class="meal-elem col-lg-4 col-md-4 col-sm-6 web">';
        html += '<img class="pos-absolute" src="images/' + image + '">';
        html +=  '<div class="pos-absolute">';
        html += '<h2 class="mealName">'+ name + '</h2>';
        html += '<span class="id invisible">' + idElem + '<span>'
        html += '</div>';
        html += '</div>';
            
        return html;
    }
    
    
    
    
    
    /* dish stuff*/
        	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];
    
    
    var allDishesHtml = "";
    
    for(var i = 0; i < dishes.length; i++) {
        name = dishes[i].name;
        img = dishes[i].image;
        idElem = dishes[i].id;
        dishElem = createDishElement(name, img, idElem);
        allDishesHtml += dishElem;
    }
    $('#dishesContainer').html(allDishesHtml);
    
    
    var createDishViewElem = function(name, img, amountOfPeople, ingredients, preparation){
        var dishViewElem = '<div class="row">';
        dishViewElem += '<div class="col-lg-6">';
        dishViewElem += '<h2 class="dishName">' + name + '</h2>';
        dishViewElem += '<img class="dishPhoto" src="images/' + img + '" />';
        dishViewElem += '</div>';
        dishViewElem += '<div class="col-lg-6">';
        dishViewElem += '<h2>Ingredients for <span class="amountOfPeople">' + amountOfPeople + '</span> people</h2>';    
        dishViewElem += '<table>';
        for(var i = 0; i < ingredients.length; i++) {
            dishViewElem += '<tr>';
            dishViewElem += '<td><span class="amount">' + ingredients[i].quantity + '</span> <span class="measurement">' + ingredients[i].unit + '</span></td>';
            dishViewElem += '<td>' + ingredients[i].name + '</td>';
            dishViewElem += '<td>SEK</td>';
            dishViewElem += '<td>' + ingredients[i].price + '</td>';
            dishViewElem += '</tr>';
        }
        dishViewElem += '</table>';
        dishViewElem += '</div>';
        dishViewElem += '</div>';
        dishViewElem += '<div class="row preparation">';
        dishViewElem += '<h2>Preparation</h2>';
        dishViewElem += '<div class="preparationText">' + preparation + '</div>';
        dishViewElem += '</div>';
        dishViewElem += '<div class="row backButton">';
        dishViewElem += '<button id="backToDishesButton" type="button" class="btn btn-default">back</button>';
        dishViewElem += '</div>';
        
        return dishViewElem;
    };
    
    getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}
    
    
    $('.meal-elem').on('click', function(){
        thisMeal = $(this);
        
        thisMealsId = thisMeal.find('.id').text();
        
        thisDish = getDish(thisMealsId);
        
        dishViewElem = createDishViewElem(thisDish.name, thisDish.image, 0, thisDish.ingredients, thisDish.description);
        
        $('#findDishView').hide(); 
        
        $('#dishView').html(dishViewElem);
        $('#dishView').show(); 
        
        $('#backToDishesButton').on("click", function(){
       // alert('test');
        $('#dishView').hide();
        $('#findDishView').show();
    });
        
    });
    


    
    
});