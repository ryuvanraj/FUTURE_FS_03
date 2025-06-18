export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">FIND A STORE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Store Locator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Adidas Running Clubs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Adidas Basketball</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">GET HELP</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Order Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping & Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Payment Options</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">ABOUT ADIDAS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Investors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">ADIDAS APPS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Adidas App</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Adidas Run Club</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Adidas Training Club</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">SNKRS</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Sale</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            </div>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              © {new Date().getFullYear()} Adidas, Inc. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}