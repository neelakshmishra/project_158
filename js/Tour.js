AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.create_border(position,item.id);
      // Thumbnail Element
      const thumbnail= this.create_thumbNails(item);
      borderEl.appendChild(thumbnail)
      // Title Text Element
      const title= this.create_title(position,item)
      borderEl.appendChild(title)
      
      this.placesContainer.appendChild(borderEl);
    }
  },
  
  create_border : function(position,id){
    var border = document.createElement('a-entity')
    border.setAttribute("id",id);
    border.setAttribute('visible',true);
    border.setAttribute('geometry',{
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10
    });
    border.setAttribute('material',{
      color:"black",
      opacity:1
    });
    border.setAttribute("position", position);
    return border;

   
  },

  create_thumbNails : function(item){
    var thumbnail = document.createElement('a-entity');
    thumbnail.setAttribute('visible',true);
    thumbnail.setAttribute('geometry',{
      primitive:"circle",
      radius:9
    });
    thumbnail.setAttribute('material',{src:item.url})
    return thumbnail;

    
  },

  create_title : function(position,item){
    var title = document.createElement('a-entity');
    title.setAttribute("text",{
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "orange",
      value: item.title,
    });
    title.setAttribute('visible',true);
    const pos = position;
    pos.y = -20;
    title.setAttribute("position",pos);

    return title;
    
  }
  
  
});
