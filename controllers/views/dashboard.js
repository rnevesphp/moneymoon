class initialPage {
  constructor() {
    console.log("AQUI LLEGA... welcome... dashboard..");

    this.a = document.getElementById('logOutHref')
    this.erase(this.a)

    this.mainCode = document.getElementById('main-code')
    this.deleteMaincode(this.mainCode)

    this.btnMobile = document.getElementById('btnMobile')
    this.btnMobile.addEventListener('click', this.logout.bind(this));

    this.iconLogOut = document.getElementById('icon-btnMobile');
    this.iconLogOut.className = "fa-solid fa-xmark";

    this.dashElem();
    this.struc();
  }



  /**
   * this method create a button to logout from the user account
   */
  createLogOut() {
    this.logOutBTN = document.createElement('i');
    this.logOutBTN.setAttribute('class', 'icon-logout fa-solid fa-arrow-right-from-bracket')

    this.li = document.getElementById('logoutbtn')
    this.li.appendChild(this.logOutBTN)

    this.logOutBTN.addEventListener("click", this.logout.bind(this));
  }



  /**
   * This method contains the logout logical
   */
  logout() {
    console.log("TAMO AQUI NO CLICK DO LOGOUT ")
    this.session = sessionStorage;

    this.session.clear()
    location.reload();
  }

  deleteMaincode(elem) {
    elem.innerHTML = "";

    return elem;
  }

  erase(elem) {
    this.createLogOut();
    elem.innerHTML = "";

    return elem;
  }



  dashElem() {
    this.doc = document;

    this.navbar = this.doc.getElementById('nav-wrapper');

    this.ul1 = this.doc.createElement('ul')
    this.ul1.setAttribute('class', 'ul-dash hide-on-med-and-down')
    this.ul1.setAttribute('id', 'ul-dash')

    // icon 1
    this.i1 = this.doc.createElement('i')
    this.i1.setAttribute('class', 'fa-solid fa-table-columns')
    this.i1.setAttribute('id', 'nav-mobile-2-icon')
    // icon 2 
    this.i2 = this.doc.createElement('i')
    this.i2.setAttribute('class', 'fa-solid fa-wallet')
    this.i2.setAttribute('id', 'nav-mobile-2-icon')
    // icon 3
    this.i3 = this.doc.createElement('i')
    this.i3.setAttribute('class', 'fa-solid fa-gear')
    this.i3.setAttribute('id', 'nav-mobile-2-icon')
    // icon 4
    this.i4 = this.doc.createElement('i')
    this.i4.setAttribute('class', 'fa-solid fa-user')
    this.i4.setAttribute('id', 'nav-mobile-2-icon')

    // creando los elementos de una lista
    this.li1 = this.doc.createElement('li')
    this.li2 = this.doc.createElement('li')
    this.li3 = this.doc.createElement('li')
    this.li4 = this.doc.createElement('li')

    // añadimos una clase a los elementos creados
    this.li1.setAttribute('class', 'dash-li')
    this.li2.setAttribute('class', 'dash-li')
    this.li3.setAttribute('class', 'dash-li')
    this.li4.setAttribute('class', 'dash-li')

    // añadiendo contenido dentro de los elementos de las lista
    this.li1.innerHTML = 'Dashboard';
    this.li2.innerHTML = 'Wallets';
    this.li3.innerHTML = 'Settings';
    this.li4.innerHTML = 'Profile';

    // añadiendo los clicks
    this.li1.addEventListener('click', this.initPage.bind(this))
    this.li2.addEventListener('click', this.wallets.bind(this))
    this.li3.addEventListener('click', this.settings.bind(this))
    this.li4.addEventListener('click', this.profile.bind(this))

    // añadiendo los iconos como hijos de los elementos
    this.li1.appendChild(this.i1)
    this.li2.appendChild(this.i2)
    this.li3.appendChild(this.i3)
    this.li4.appendChild(this.i4)

    // añadiendo los elementos creados a la lista desordenada
    this.ul1.appendChild(this.li1);
    this.ul1.appendChild(this.li2);
    this.ul1.appendChild(this.li3);
    this.ul1.appendChild(this.li4);

    // añadiendo la lista dentro del navbar 
    this.navbar.appendChild(this.ul1);

    // Haciendo el remove del logo para que este cuadrante entre la lista desordenada
    this.logo = this.doc.querySelector('.brand-logo');
    this.logo.remove()
  }





  settings() {
    this.config = new config();
  }

  profile() {
    this.pf = new profile();
  }

  initPage() {

  }

  wallets() {
    this.w = new wallets();
  }

  struc() {
    this.st = new navStruc();
  }
}
