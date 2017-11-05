var name = localStorage.getItem("betoatsume-name");
var clout = parseInt(localStorage.getItem("betoatsume-clout"));


var items = [
  {key: "firstaid", isOwned: false},
  {key: "bus", isOwned: false},
  {key: "bass", isOwned: false},
  {key: "jersey", isOwned: false},
  {key: "books", isOwned: false},
  {key: "tansuit", isOwned: false},
  {key: "infinitejest", isOwned: false},
];

var uriPrefix = './img/'
var cats = [
  {key: 'steveadler', name: "Steve Adler", image: uriPrefix + 'adlercat.png', isOwned: false},
  {key: 'annrichards', name: "Ann Richards", image: uriPrefix + 'annrichardscat.png', isOwned: false},
  {key: 'betoorourke', name: "Beto O'Rourke", image: uriPrefix + 'betocat.png', isOwned: false},
  {key: 'donnahoward', name: "Donna Howard", image: uriPrefix + 'donnacat.png', isOwned: false},
  {key: 'dougsnyder', name: "Doug Snyder", image: uriPrefix + 'dougcat.png', isOwned: false},
  {key: 'ginahinojosa', name: "Gina Hinojosa", image: uriPrefix + 'ginacat.png', isOwned: false},
  {key: 'lloyddoggett', name: "Lloyd Doggett", image: uriPrefix + 'lloydcat.png', isOwned: false},
  {key: 'barackobama', name: "Barack Obama", image: uriPrefix + 'obamacat.png', isOwned: false},
]

$(document).ready(function() {
  setPointBalanceText();
	setHeaderText();

  updateItems();
  updateCats();
  addCats();

  repositionCats(getScale());
  repositionComputerBox(getScale());

  $(window).resize(function() {
    var scale = getScale();
    repositionCats(scale);
    repositionComputerBox(scale);
  });

  $("#computer-box").click(function() {
    $("#computer-modal").modal();
  });
 })

function setPointBalanceText() {
  $("#pointbalance").text("Point balance: " + clout);
}

function setHeaderText() {
	$("#headername").text(name + "'s Office");
}

function getScale() {
  return window.innerWidth / 1919;
}

function repositionComputerBox(scale) {
  $("#computer-box").css({
    top: 328 * scale,
    left: 882 * scale,
    width: 152 * scale,
    height: 82 * scale
  });
}

function repositionCats(scale) {
  $(".catimg").each(function(index) {
      $(this).css({
        top: (620 * scale) - 56
      });
  });
}

function cheat() {
  clout = 9999999;
  localStorage.setItem("betoatsume-clout", "9999999");
}

function updateItems() {
  for (i = 0; i < items.length; i++) {
    if (localStorage.getItem("betoatsume-item-" + items[i].key) === "true") {
      items[i].isOwned = true;
    }
  }
}

function addCats() {
  for (i = 0; i < cats.length; i++) {
    if (cats[i].isOwned) {
      $("#images").append("<img src=\"" + cats[i].image + "\" class=\"catimg\" id=\"cat-" + cats[i].key + "\">");
    }
  }
  
  $('.catimg').click(function() {
    var key = $(this).attr('id').substring(4);
    $("#candidate-modal").modal();
    $("#modal-candidate-name").html(cats[getCatIndex(key)].name);
    $("#modal-candidate-body").html(getCandidateBio(key));
  });
}

function getCandidateBio(key) {
  if (key === "betoorourke") {
    return "<p>Likes: Bass Guitar, El Paso</p>\n<p>Dislikes: Ted Cruz</p>\n<p>Beto O'Rourke is a Democratic Congressman who represents Texas' 16th congressional district and is running to replace Ted Cruz in the U.S. Senate. A former Punk Bass guitarist, tech executive, and advocate he supports ending the War on Drugs, Campaign finance reform, and comprehensive immigration reform. Click here to learn more about Beto O'Rourke. https://betofortexas.com/</p>";
  } else if (key === "annrichards") {
    return "<p>Likes: Feminism, Well-funded Public Schools</p>\n<p>Dislikes: Karl Rove</p>\n<p>Ann Richards was Governor of Texas from 1990 to 1994. Born in Texas in 1933 right in the middle of the Depression she was deeply impacted by the New Deal and became a lifelong Democrat  During her tenure she passed bills to regulate the sale of firearms, fund public education, streamline government finances,and advance women's rights. Her Daughter Cecile is the president of Planned Parenthood and like her mother an outspoken defender of women's rights. Ann Richards passed away in 2006 after a lifetime of fighting for common people.</p>";
  } else if (key === "barackobama") {
    return "<p>Likes: Universal Healthcare, Community Organizing, Michelle, Thin Mints </p>\n<p>Dislikes: Neil Gorsuch, Watching the Bulls lose</p>\n<p>Barack Obama is a former Illinois Senator and President of the United States. He was born in Hawaii in 1961 and lived in Washington State and Indonesia. His tenure as president included landmark legislation including the Affordable Care act, Dodd Frank Wall Street  Reform and Consumer Protection Act and the Lily Ledbetter ir Pay Act. He was instrumental in the acceptance of the seminal Paris Climate Agreement. He nominated Sonya Sotomayor to the Supreme Court making her the first Hispanic justice. Click here to learn more about Barack Obama</p>\n<p>https://barackobama.com/</p>";
  } else if (key === "lloyddoggett") {
    return "<p>Likes: Medicare, Environment, Progressive Taxation</p>\n<p>Dislikes: Republicans</p>\n<p>Lloyd Doggett is a representative in the United States Congress representing Texas's 35th district. Previously he served as a Texas state Senator, and as a justice on the Texas State Supreme Court. Doggett authored the bill creating the Texas Commission on Human Rights, as well as a law outlawing \"cop killer\" bullets and a \"sunset law\" He is a strong advocate for working families and for more transparent governor. To Learn more about Lloyd Doggett click here https://www.votedoggett.com/</p>";
  } else if (key === "ginahinojosa") {
    return "<p>Likes: Education, Transportation/Infastructure, Women & Families</p>\n<p>Dislikes: Dan Patrick</p>\n<p>Gina Hinojosa is a member of the Texas Legislature representing District 49. She is a Texas native and has lived in Austin for 25 years. She is a strong advocate for education and children. Being a former member of the AISD School board she fought for increased public education spending. SHe is a strong supporter of organized labor and has fought to represent workers who have been discriminated against due to age, race, gender, and disability. To learn more about Gina Hinojosa click here http://www.ginaforaustin.com/</p>";
  } else if (key === "donnahoward") {
    return "<p>Likes: Healthcare</p>\n<p>Dislikes: Anti-Vaxxers</p>\n<p>Representative Donna Howard has served in the Texas House of Representatives since 2006. She is a member of the House Appropriations Committee, and sits on its Article III Subcommittee which oversees education spending in the state budget. Donna serves as Vice-Chair of the Calendars Committee, is also a longtime member of both the House Higher Education and House Administration Committees. A native of Austin, Donna earned a Bachelor's degree in nursing and a Master's degree in health education from the University of Texas. She worked as a critical care nurse at Brackenridge and Seton hospitals, and served as Austin's first hospital-based Patient Education Coordinator. Donna is a past president of the Texas Nurses Association (District 5) and was a health education instructor at UT.</p>";
  } else if (key === "steveadler") {
    return "<p>Likes: Bonds, Buses</p>\n<p>Dislikes: Traffic</p>\n<p>Steve Adler is the current mayor of Austin, Texas. He grew up in Washington, but came to the University of Texas for law school and has remained in Austin since. As a lawyer in Austin he frequently advocated for the rights of people who had been discriminated against. Since becoming mayor in 2015, he's helped to raise the minimum wage for city employees.</p>"
  } else if (key === "dougsnyder") {
    return "<p>Likes: Cheese & Crackers</p>\n<p>Dislikes: Institutional Discrimination</p>\n<p>Doug Snyder is the president of University Democrats at the University of Texas at Austin.</p>"
  }
  return "";
}

function updateCats() {
  for (i = 0; i < items.length; i++) {
    console.log(i);
    if (items[i].isOwned) {
      key = items[i].key;
      console.log(key);
      if (key === "bass") {
        cats[getCatIndex('betoorourke')].isOwned = true;
      } else if (key === "books") {
        cats[getCatIndex('donnahoward')].isOwned = true;
        cats[getCatIndex('annrichards')].isOwned = true;
      } else if (key === "firstaid") {
        cats[getCatIndex('donnahoward')].isOwned = true;
      } else if (key === "bus") {
        cats[getCatIndex('ginahinojosa')].isOwned = true;
        cats[getCatIndex('steveadler')].isOwned = true;
      } else if (key === "tansuit") {
        cats[getCatIndex('barackobama')].isOwned = true;
      } else if (key === "jersey") {
        cats[getCatIndex('lloyddoggett')].isOwned = true;
      } else if (key === "infinitejest") {
        cats[getCatIndex('dougsnyder')].isOwned = true;
      }
    }
  }
}

function getCatIndex(key) {
  for (j = 0; j < cats.length; j++) {
    if (cats[j].key === key) {
      return j;
    }
  }
  return null;
}
