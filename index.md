                    SHOP EASE
                       │
                       ▼
                    Navbar
                 ┌─────┴─────┐
                 ▼           ▼
               Home         Cart
                 │
        ┌────────┼─────────┐
        ▼        ▼         ▼
      Search   Category  Products
                          │
                          ▼
                     ProductCard
                          │
                ┌─────────┴─────────┐
                ▼                   ▼
          Product Details        Add Cart
                │                   │
                └────────┬──────────┘
                         ▼
                    CartContext
                         │
                         ▼
                       Cart
                  ┌──────┼──────┐
                  ▼      ▼      ▼
                +Qty   -Qty   Remove
                         │
                         ▼
                    Total Price

>Explain your project structure
I separated my project into components, pages, context and services. Components contain reusable UI elements such as ProductCard, Navbar and CartItem. Pages contain complete screens like Home, ProductDetails and Cart. I created a services folder for API calls, so API logic stays separate from UI. I used Context API to manage cart state globally. React Router is used for navigation between pages

> Concept                 Project mein use            
 `useState`                Search, category, loading   
 `useEffect`             API se products fetch       
`useContext`            Global cart                 
 Context API             Cart management             
 React Router            Pages/navigation             
  Props                   Components ke darmiyan data 
  `.map()`                Products display            
  `.filter()`             Search/category             
 `.reduce()`             Cart total                  
 `async/await`           API calls                   
 Fetch API               Backend/API integration     
 Conditional rendering   Loading/error/empty cart    
 Responsive CSS          Mobile/tablet/desktop       