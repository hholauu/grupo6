let navBar = document.querySelector("#navBar")
navBar.classList.add("navbar")
navBar.classList.add("navbar-expand-lg")
navBar.classList.add("bg-body-tertiary")

let divContainerFluid = document.createElement("div")
divContainerFluid.classList.add("container-fluid")

let aNavbarBrand = document.createElement("a")
aNavbarBrand.classList.add("navbar-brand")
aNavbarBrand.textContent = "Navbar"
divContainerFluid.appendChild(aNavbarBrand)

let buttonNavbarToggler = document.createElement("button")
buttonNavbarToggler.classList.add("navbar-toggler")
buttonNavbarToggler.type = "button"
buttonNavbarToggler.dataBsToggle = "collapse"
buttonNavbarToggler.dataBsTarget = "#navbarSupportedContent" //buttonNavbarToggler.setAttribute("data-bs-target","#navbarSupportedContent")
buttonNavbarToggler.ariaControls = "navbarSupportedContent"
buttonNavbarToggler.ariaExpanded = "false"
buttonNavbarToggler.ariaLabel = "Toggle navigation"

let spanNavbarTogglerIcon = document.createElement("span")
spanNavbarTogglerIcon.classList.add("navbar-toggler-icon")
buttonNavbarToggler.appendChild(spanNavbarTogglerIcon)

divContainerFluid.appendChild(buttonNavbarToggler)

let divCollapse_navbarCollapse = document.createElement("div")
divCollapse_navbarCollapse.classList.add("collapse")
divCollapse_navbarCollapse.classList.add("navbar-collapse")
divCollapse_navbarCollapse.setAttribute("id","navbarSupportedContent")

let ulNavbarNav_meAuto_mb2_mbLg0 = document.createElement("ul")
ulNavbarNav_meAuto_mb2_mbLg0.classList.add("navbar-nav")
ulNavbarNav_meAuto_mb2_mbLg0.classList.add("me-auto")
ulNavbarNav_meAuto_mb2_mbLg0.classList.add("mb-2")
ulNavbarNav_meAuto_mb2_mbLg0.classList.add("mb-lg-0")

let liNavItem = document.createElement("li")
liNavItem.classList.add("nav-item")

let aNavLink_active = document.createElement("a")
aNavLink_active.classList.add("nav-link")
aNavLink_active.classList.add("active")
aNavLink_active.ariaCurrent = "page"
aNavLink_active.textContent = "Home"
liNavItem.appendChild(aNavLink_active)

ulNavbarNav_meAuto_mb2_mbLg0.appendChild(liNavItem)

let liNavItem2 = document.createElement("a")
liNavItem2.classList.add("nav-item")

let aNavLink2 = document.createElement("a")
aNavLink2.textContent = "Link"
liNavItem2.appendChild(aNavLink2)

ulNavbarNav_meAuto_mb2_mbLg0.appendChild(liNavItem2)

let liNavItem_dropdown = document.createElement("li")
liNavItem_dropdown.classList.add("nav-item")
liNavItem_dropdown.classList.add("dropdown")

let aNavLink_dropdownToggle = document.createElement("a")
aNavLink_dropdownToggle.classList.add("nav-link")
aNavLink_dropdownToggle.classList.add("dropdown-toggle")
aNavLink_dropdownToggle.role = "button"
aNavLink_dropdownToggle.dataBsToggle = "dropdown"
aNavLink_dropdownToggle.ariaExpanded = "false"
aNavLink_dropdownToggle.textContent = "Dropdown"
liNavItem_dropdown.appendChild(aNavLink_dropdownToggle)

let ulDropdownMenu = document.createElement("ul")
ulDropdownMenu.classList.add("dropdown-menu")

let li_ulDropdownMenu1 = document.createElement("li")
let aDropdownItem_action = document.createElement("a")
aDropdownItem_action.classList.add("dropdown-item")
aDropdownItem_action.textContent = "Action"
li_ulDropdownMenu1.appendChild(aDropdownItem_action)
ulDropdownMenu.appendChild(li_ulDropdownMenu1)

let li_ulDropdownMenu2 = document.createElement("li")
let aDropdownItem_Another_action = document.createElement("a")
aDropdownItem_Another_action.classList.add("dropdown-item")
aDropdownItem_Another_action.textContent = "Another action"
li_ulDropdownMenu2.appendChild(aDropdownItem_Another_action)
ulDropdownMenu.appendChild(li_ulDropdownMenu2)

let li_ulDropdownMenu3 = document.createElement("li")
let hrDropdownDivider = document.createElement("hr")
hrDropdownDivider.classList.add("dropdown-divider")
li_ulDropdownMenu3.appendChild(hrDropdownDivider)
ulDropdownMenu.appendChild(li_ulDropdownMenu3)

let li_ulDropdownMenu4 = document.createElement("li")
let aDropdownItem_Something_else_here = document.createElement("a")
aDropdownItem_Something_else_here.classList.add("dropdown-item")
aDropdownItem_Something_else_here.textContent = "Something else here"
li_ulDropdownMenu4.appendChild(aDropdownItem_Something_else_here)
ulDropdownMenu.appendChild(li_ulDropdownMenu4)

liNavItem_dropdown.appendChild(ulDropdownMenu)

ulNavbarNav_meAuto_mb2_mbLg0.appendChild(liNavItem_dropdown)

let liNavItem3 = document.createElement("li")
liNavItem3.classList.add("nav-item")

let aNavLink_disabled = document.createElement("a")
aNavLink_disabled.classList.add("nav-link")
aNavLink_disabled.classList.add("disabled")
aNavLink_disabled.ariaDisabled = "true"
aNavLink_disabled.textContent = "Disabled"
liNavItem3.appendChild(aNavLink_disabled)

ulNavbarNav_meAuto_mb2_mbLg0.appendChild(liNavItem3)

divCollapse_navbarCollapse.appendChild(ulNavbarNav_meAuto_mb2_mbLg0)

let formDFlex1 = document.createElement("form")
formDFlex1.classList.add("d-flex")
formDFlex1.role = "search"

let inputFormControl_me2 = document.createElement("input")
inputFormControl_me2.classList.add("form-control")
inputFormControl_me2.classList.add("me-2")
inputFormControl_me2.type = "search"
inputFormControl_me2.placeholder = "Buscar"
inputFormControl_me2.ariaLabel = "Search"
formDFlex1.appendChild(inputFormControl_me2)

let buttonBtn_btnOutlineSuccess = document.createElement("button")
buttonBtn_btnOutlineSuccess.classList.add("btn")
buttonBtn_btnOutlineSuccess.classList.add("btn-outline-success")
buttonBtn_btnOutlineSuccess.type = "submit"
buttonBtn_btnOutlineSuccess.textContent = "Search"
formDFlex1.appendChild(buttonBtn_btnOutlineSuccess)

divCollapse_navbarCollapse.appendChild(formDFlex1)

divContainerFluid.appendChild(divCollapse_navbarCollapse)

navBar.appendChild(divContainerFluid)