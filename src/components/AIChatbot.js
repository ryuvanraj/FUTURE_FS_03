"use client";
import { useState } from "react";

const knowledgeBase = [
	{
		q: "what offers are available",
		a: "We currently have an extra 20% off on sale items. Use code EXTRA20 at checkout!",
		suggestions: [
			"How do I use a promo code?",
			"What payment methods do you accept?",
			"Can I return sale items?",
			"Do you offer free shipping?",
			"How do I subscribe to your newsletter?",
		],
	},
	{
		q: "how do i track my order",
		a: "You can track your order in your account dashboard under 'My Orders'.",
		suggestions: [
			"Can I cancel my order?",
			"How do I return a product?",
			"How long does delivery take?",
			"Can I change my delivery address?",
			"How do I contact customer support?",
		],
	},
	{
		q: "how do i return a product",
		a: "To return a product, go to your orders, select the item, and click 'Return'.",
		suggestions: [
			"Can I exchange a product?",
			"What is your return policy?",
			"How do I apply for a refund?",
			"How long does a refund take?",
			"Do you offer free returns?",
		],
	},
	{
		q: "what payment methods do you accept",
		a: "We accept credit/debit cards, UPI, PayPal, and net banking.",
		suggestions: [
			"Do you offer cash on delivery?",
			"Can I use multiple payment methods?",
			"What should I do if my payment fails?",
			"Is it safe to use my credit card online?",
			"Do you offer financing options?",
		],
	},
	{
		q: "how long does delivery take",
		a: "Delivery usually takes 3-7 business days depending on your location.",
		suggestions: [
			"Can I expedite my shipping?",
			"Do you offer same-day delivery?",
			"What are your shipping fees?",
			"Do you ship internationally?",
			"How do I track my shipment?",
		],
	},
	{
		q: "how do i cancel my order",
		a: "You can cancel your order from 'My Orders' before it is shipped.",
		suggestions: [
			"Can I modify my order after placing it?",
			"How do I return a product?",
			"Will I be charged a cancellation fee?",
			"How long does it take to process a cancellation?",
			"Can I cancel a pre-order?",
		],
	},
	{
		q: "can i change my delivery address",
		a: "You can change your delivery address before the order is shipped from your account settings.",
		suggestions: [
			"How do I update my account information?",
			"Can I change my billing address?",
			"What if I entered the wrong address?",
			"Is there a fee to change my delivery address?",
			"Can I pick up my order from a store?",
		],
	},
	{
		q: "do you offer free shipping",
		a: "Yes, we offer free shipping on orders above $50.",
		suggestions: [
			"Is there a minimum purchase for free shipping?",
			"Do you offer free returns?",
			"How do I use a shipping discount code?",
			"Can I combine free shipping with other offers?",
			"Do you offer expedited shipping options?",
		],
	},
	{
		q: "how do i use a promo code",
		a: "You can enter your promo code at checkout to avail discounts.",
		suggestions: [
			"Where do I find my promo code?",
			"Can I use multiple promo codes?",
			"Is there an expiration date on my promo code?",
			"Can I use a promo code on sale items?",
			"What should I do if my promo code doesn't work?",
		],
	},
	{
		q: "what is your return policy",
		a: "You can return products within 30 days of delivery for a full refund.",
		suggestions: [
			"Can I exchange a product?",
			"How do I apply for a refund?",
			"How long does a refund take?",
			"Do you offer free returns?",
			"What items are non-returnable?",
		],
	},
	{
		q: "how do i contact customer support",
		a: "You can contact us via the 'Contact Us' page or email support@adidas.com.",
		suggestions: [
			"Do you have a phone number for customer support?",
			"Can I chat with a representative online?",
			"What are your customer support hours?",
			"How do I provide feedback about my experience?",
			"Do you have a FAQ section?",
		],
	},
	{
		q: "do you have a size guide",
		a: "Yes, you can find our size guide on each product page.",
		suggestions: [
			"How do I measure my foot size?",
			"Can I get a size recommendation?",
			"What if I'm between sizes?",
			"Do you offer extended sizes?",
			"How do I know if an item will fit me?",
		],
	},
	{
		q: "can i exchange a product",
		a: "Yes, exchanges are allowed within 30 days of delivery.",
		suggestions: [
			"How do I initiate an exchange?",
			"Can I exchange an item I bought on sale?",
			"What if the item I want is out of stock?",
			"Do I have to pay for return shipping?",
			"How long does an exchange take?",
		],
	},
	{
		q: "how do i reset my password",
		a: "Click 'Forgot Password' on the sign-in page to reset your password.",
		suggestions: [
			"Can I change my password from my account settings?",
			"What should I do if I don't receive the password reset email?",
			"How do I create a strong password?",
			"Can I use the same password for multiple accounts?",
			"How often should I change my password?",
		],
	},
	{
		q: "do you have gift cards",
		a: "Yes, Adidas gift cards are available for purchase online.",
		suggestions: [
			"How do I purchase a gift card?",
			"Can I customize the amount on a gift card?",
			"How do I redeem a gift card?",
			"Do gift cards expire?",
			"Can I use a gift card to buy a gift card?",
		],
	},
	{
		q: "how do i redeem a gift card",
		a: "Enter your gift card code at checkout to redeem it.",
		suggestions: [
			"Can I use my gift card partially?",
			"What if my gift card code doesn't work?",
			"Do I need to have an account to use a gift card?",
			"Can I combine gift cards with other payment methods?",
			"How do I check the balance on my gift card?",
		],
	},
	{
		q: "can i order without an account",
		a: "Yes, you can checkout as a guest, but creating an account is recommended.",
		suggestions: [
			"What are the benefits of creating an account?",
			"Can I view my order history without an account?",
			"How do I create an account?",
			"Is there a fee to create an account?",
			"Can I link my social media account to sign up?",
		],
	},
	{
		q: "how do i check product availability",
		a: "Product availability is shown on each product page.",
		suggestions: [
			"Can I be notified when an item is back in stock?",
			"Do you restock sold out items?",
			"How do I find similar products in stock?",
			"Can I check availability at my local store?",
			"Is product availability the same online and in-store?",
		],
	},
	{
		q: "do you restock sold out items",
		a: "Some items may be restocked. Sign up for notifications on the product page.",
		suggestions: [
			"How will I know if an item is restocked?",
			"Can I reserve an item that is back in stock?",
			"Do you restock items during sales?",
			"Is there a limit to how many items I can buy when restocked?",
			"Can I return or exchange a restocked item?",
		],
	},
	{
		q: "how do i subscribe to your newsletter",
		a: "Enter your email at the bottom of our homepage to subscribe.",
		suggestions: [
			"Do I get a discount for signing up?",
			"How often will I receive newsletters?",
			"Can I customize my newsletter preferences?",
			"Is my information safe with you?",
			"How do I unsubscribe from the newsletter?",
		],
	},
	{
		q: "can i modify my order after placing it",
		a: "Orders cannot be modified after placement, but you can cancel before shipping.",
		suggestions: [
			"How do I cancel my order?",
			"Can I change the delivery address?",
			"Is there a fee to modify my order?",
			"How long do I have to modify or cancel my order?",
			"Can I add items to my order after placing it?",
		],
	},
	{
		q: "what is the warranty on products",
		a: "Most Adidas products come with a 6-month warranty against manufacturing defects.",
		suggestions: [
			"How do I claim a warranty?",
			"Can I extend the warranty on my product?",
			"What does the warranty cover?",
			"Do I need to keep my receipt for warranty service?",
			"Can I transfer my warranty to another person?",
		],
	},
	{
		q: "how do i apply for a refund",
		a: "Refunds are processed automatically after a successful return.",
		suggestions: [
			"How long does it take to get a refund?",
			"Will I be notified when my refund is processed?",
			"Can I expedite my refund?",
			"What if I paid with a gift card?",
			"Do you offer store credit instead of a refund?",
		],
	},
	{
		q: "how long does a refund take",
		a: "Refunds are processed within 7 business days after we receive your return.",
		suggestions: [
			"Can I track the status of my refund?",
			"Will I get a confirmation email for my refund?",
			"How do I know if my refund has been processed?",
			"Can I return an item to a store for a faster refund?",
			"What if I don't see the refund in my account after 7 days?",
		],
	},
	{
		q: "do you offer student discounts",
		a: "Yes, students can avail special discounts by verifying their student status.",
		suggestions: [
			"How do I verify my student status?",
			"Is there a student discount for online orders?",
			"Can I use my student discount in-store?",
			"How long does the student discount last?",
			"Can I combine the student discount with other offers?",
		],
	},
	{
		q: "how do i use my store credit",
		a: "Store credit is automatically applied at checkout.",
		suggestions: [
			"Can I check my store credit balance?",
			"Does my store credit expire?",
			"Can I use store credit to buy a gift card?",
			"Is there a limit to how much store credit I can use?",
			"Can I transfer my store credit to another account?",
		],
	},
	{
		q: "can i track my shipment",
		a: "Yes, tracking details are available in 'My Orders' after your order is shipped.",
		suggestions: [
			"Can I get SMS or email notifications for my shipment?",
			"How do I report a problem with my shipment?",
			"Can I change the shipping method after placing an order?",
			"What should I do if my tracking number is not working?",
			"Do you offer international tracking?",
		],
	},
	{
		q: "do you ship internationally",
		a: "Currently, we only ship within the country.",
		suggestions: [
			"Will you ship internationally in the future?",
			"Can I order from another country and ship to the US?",
			"Do you have a list of countries you ship to?",
			"Is there an additional fee for international shipping?",
			"How do I track an international shipment?",
		],
	},
	{
		q: "how do i update my account information",
		a: "Go to your account settings to update your information.",
		suggestions: [
			"Can I change my email address?",
			"How do I change my password?",
			"Can I add or remove a payment method?",
			"How do I update my shipping address?",
			"Can I view my order history?",
		],
	},
	{
		q: "what should i do if i receive a damaged product",
		a: "Contact customer support with photos and order details for assistance.",
		suggestions: [
			"Can I return a damaged product?",
			"Will you send a replacement for the damaged product?",
			"How do I report a damaged product?",
			"Do I need to return the damaged product?",
			"Can I get a refund for a damaged product?",
		],
	},
	{
		q: "can i pre-order upcoming products",
		a: "Yes, pre-orders are available for select products. Check the product page for details.",
		suggestions: [
			"How do I know if a product is available for pre-order?",
			"Can I cancel a pre-order?",
			"Will I be charged immediately for a pre-order?",
			"How do I track my pre-order?",
			"Do you offer discounts on pre-orders?",
		],
	},
	{
		q: "how do i know my shoe size",
		a: "Refer to our size guide or visit a nearby Adidas store for assistance.",
		suggestions: [
			"Can I get a size recommendation online?",
			"What if I'm between sizes?",
			"Do you offer extended sizes?",
			"How do I measure my foot size?",
			"Can I return shoes that don't fit?",
		],
	},
	{
		q: "what is the adidas membership program",
		a: "Join our membership program for exclusive offers and early access to new products.",
		suggestions: [
			"How do I join the membership program?",
			"Is there a fee for the membership program?",
			"What are the benefits of becoming a member?",
			"Can I use my member discount on sale items?",
			"How do I cancel my membership?",
		],
	},
	{
		q: "how do i join the membership program",
		a: "Sign up for an account and opt-in for membership during registration.",
		suggestions: [
			"Do I need to provide additional information to join?",
			"Can I join the membership program later?",
			"Is my membership automatically renewed?",
			"How do I update my membership preferences?",
			"Can I have multiple memberships on one account?",
		],
	},
	{
		q: "can i use multiple promo codes",
		a: "Only one promo code can be used per order.",
		suggestions: [
			"Can I use a promo code with a gift card?",
			"Is there a limit to the number of items I can buy with a promo code?",
			"Can I use a promo code on top of a sale price?",
			"What should I do if my promo code isn't working?",
			"Can I share my promo code with others?",
		],
	},
	{
		q: "do you offer cash on delivery",
		a: "Yes, cash on delivery is available for select locations.",
		suggestions: [
			"Is there an additional fee for cash on delivery?",
			"Can I pay a part of my order in cash and the rest by card?",
			"What should I do if I don't have the exact change?",
			"Can I cancel a cash on delivery order?",
			"How do I know if cash on delivery is available for my order?",
		],
	},
	{
		q: "how do i leave a product review",
		a: "Go to the product page and click 'Write a Review'.",
		suggestions: [
			"Do I need to create an account to leave a review?",
			"Can I edit or delete my review later?",
			"How do you ensure reviews are genuine?",
			"Do you offer incentives for leaving a review?",
			"Can I report a review that I think is fake?",
		],
	},
	{
		q: "can i save items for later",
		a: "Yes, add items to your wishlist to save them for later.",
		suggestions: [
			"How do I access my wishlist?",
			"Can I share my wishlist with others?",
			"Do items in my wishlist expire?",
			"Can I add items to my wishlist from the app?",
			"How do I remove items from my wishlist?",
		],
	},
	{
		q: "how do i remove items from my cart",
		a: "Go to your cart and click the remove button next to the item.",
		suggestions: [
			"Can I remove all items from my cart at once?",
			"Will removing an item from my cart also remove it from my wishlist?",
			"Can I recover an item after removing it from my cart?",
			"Is there a limit to how many items I can have in my cart?",
			"Can I share my cart with someone else?",
		],
	},
	{
		q: "do you have a mobile app",
		a: "Yes, download the Adidas app from the App Store or Google Play.",
		suggestions: [
			"What features does the Adidas app offer?",
			"Is the app available for both iOS and Android?",
			"Do I need an account to use the app?",
			"Can I track my order through the app?",
			"Does the app offer exclusive discounts?",
		],
	},
	{
		q: "how do i get notified about new arrivals",
		a: "Subscribe to our newsletter or enable notifications in your account.",
		suggestions: [
			"Will I get a discount for subscribing?",
			"How often will I be notified about new arrivals?",
			"Can I choose what type of notifications I receive?",
			"Is my information safe with you?",
			"How do I unsubscribe from notifications?",
		],
	},
	{
		q: "can i request a product that is not listed",
		a: "Contact customer support with your request and we will try to assist.",
		suggestions: [
			"How do I suggest a product?",
			"Can I request a specific size or color?",
			"Will you notify me if the product becomes available?",
			"Do you offer custom or personalized products?",
			"Can I get a discount for suggesting a product?",
		],
	},
	{
		q: "how do i change my email address",
		a: "Update your email in your account settings.",
		suggestions: [
			"Can I have multiple email addresses on one account?",
			"Will changing my email affect my order history?",
			"How do I verify my new email address?",
			"Can I change my email address from the app?",
			"What should I do if I don't receive the verification email?",
		],
	},
	{
		q: "what is your privacy policy",
		a: "Read our privacy policy at the bottom of our website.",
		suggestions: [
			"How do you protect my personal information?",
			"Can I access the personal data you have on me?",
			"How do I request deletion of my data?",
			"Do you share my data with third parties?",
			"How can I opt-out of data collection?",
		],
	},
	{
		q: "how do i delete my account",
		a: "Contact customer support to request account deletion.",
		suggestions: [
			"What happens to my data if I delete my account?",
			"Can I temporarily deactivate my account instead of deleting it?",
			"How do I know my account is deleted?",
			"Can I create a new account with the same email after deletion?",
			"Will I lose my order history if I delete my account?",
		],
	},
	{
		q: "do you offer bulk purchase discounts",
		a: "For bulk orders, please contact our sales team.",
		suggestions: [
			"How do I qualify for bulk discounts?",
			"Is there a minimum order quantity for bulk discounts?",
			"Can I combine bulk discounts with other offers?",
			"How do I place a bulk order?",
			"Will I get a separate invoice for a bulk order?",
		],
	},
	{
		q: "how do i contact the sales team",
		a: "Email sales@adidas.com for bulk or corporate orders.",
		suggestions: [
			"Can I call the sales team directly?",
			"Is there a dedicated account manager for bulk orders?",
			"How quickly will I get a response from the sales team?",
			"Can the sales team assist with product selection?",
			"Do you offer product samples for bulk orders?",
		],
	},
	{
		q: "can i get a GST invoice",
		a: "Yes, GST invoices are provided for all eligible orders.",
		suggestions: [
			"How do I request a GST invoice?",
			"Is there an additional charge for a GST invoice?",
			"Can I get a GST invoice for my bulk order?",
			"How do I know if I'm eligible for a GST invoice?",
			"Can I cancel my GST invoice request?",
		],
	},
	{
		q: "what is your exchange policy",
		a: "Exchanges are allowed within 30 days for unused products in original packaging.",
		suggestions: [
			"How do I initiate an exchange?",
			"Can I exchange a product I bought on sale?",
			"What if the item I want is out of stock?",
			"Do I have to pay for return shipping?",
			"How long does an exchange take?",
		],
	},
	{
		q: "how do i check my order history",
		a: "Order history is available in your account dashboard under 'My Orders'.",
		suggestions: [
			"Can I reorder an item from my order history?",
			"How do I download my order invoices?",
			"Can I view my order history without an account?",
			"Is there a limit to how far back I can view my order history?",
			"Can I get my order history sent to my email?",
		],
	},
];

const complimentWords = [
	"thanks",
	"thank you",
	"thankyou",
	"ok",
	"okay",
	"mm",
	"great",
	"cool",
	"nice",
	"good",
	"awesome",
	"perfect",
	"fine",
	"alright",
];

const initialSuggestions = [
	"What offers are available?",
	"How do I track my order?",
	"How do I return a product?",
	"Do you offer free shipping?",
	"How long does delivery take?",
];

export default function AIChatbot() {
	const [showChat, setShowChat] = useState(false);
	const [messages, setMessages] = useState([
		{ from: "bot", text: "Hi! How can I help you today?" },
	]);
	const [input, setInput] = useState("");
	const [suggestedQuestions, setSuggestedQuestions] = useState(initialSuggestions);

	const handleSend = () => {
		if (!input.trim()) return;
		setMessages([...messages, { from: "user", text: input }]);
		const userQuestion = input.trim().toLowerCase();

		// Compliment/greeting detection
		if (complimentWords.some((word) => userQuestion === word)) {
			setInput("");
			setTimeout(() => {
				setMessages((msgs) => [
					...msgs,
					{
						from: "bot",
						text: "You're welcome! If you have more questions, just ask. 😊",
					},
				]);
				setSuggestedQuestions(initialSuggestions);
			}, 500);
			return;
		}

		const found = knowledgeBase.find((qa) => userQuestion.includes(qa.q));
		setInput("");
		setTimeout(() => {
			setMessages((msgs) => [
				...msgs,
				{
					from: "bot",
					text: found
						? found.a
						: "Sorry, I don't have an answer for that. Please contact support or try rephrasing your question.",
				},
			]);
			setSuggestedQuestions(
				found && found.suggestions ? found.suggestions : initialSuggestions
			);
		}, 500);
	};

	return (
		<>
			<button
				className="fixed bottom-8 right-8 bg-black text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-50 hover:bg-gray-800 transition cursor-pointer text-3xl"
				onClick={() => setShowChat((v) => !v)}
				aria-label="Open AI Chatbot"
				style={{ fontWeight: "bold" }}
			>
				AI
			</button>
			{showChat && (
				<div className="fixed bottom-28 right-8 w-80 bg-black rounded-lg shadow-lg z-50 flex flex-col overflow-hidden border border-white">
					<div className="bg-black text-white px-4 py-2 flex justify-between items-center border-b border-white">
						<span>AI Helpline</span>
						<button
							onClick={() => setShowChat(false)}
							className="text-white font-bold text-xl"
						>
							×
						</button>
					</div>
					{/* Suggested Questions */}
					<div className="p-3 flex flex-wrap gap-2 border-b border-white bg-black">
						{suggestedQuestions.map((q, idx) => (
							<button
								key={idx}
								className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full hover:bg-gray-700 transition cursor-pointer"
								onClick={() => setInput(q)}
							>
								{q}
							</button>
						))}
					</div>
					<div
						className="flex-1 p-4 space-y-2 overflow-y-auto"
						style={{ maxHeight: 300 }}
					>
						{messages.map((msg, idx) => (
							<div
								key={idx}
								className={`text-sm px-3 py-2 rounded-lg ${
									msg.from === "bot"
										? "bg-gray-900 text-white self-start border border-white"
										: "bg-white text-black self-end text-right"
								}`}
							>
								{msg.text}
							</div>
						))}
					</div>
					<div className="flex border-t border-white bg-black">
						<input
							className="flex-1 px-3 py-2 text-sm outline-none bg-black text-white placeholder-gray-400"
							placeholder="Type your question..."
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={(e) => e.key === "Enter" && handleSend()}
						/>
						<button
							className="bg-white text-black px-4 py-2 cursor-pointer"
							onClick={handleSend}
						>
							Send
						</button>
					</div>
				</div>
			)}
		</>
	);
}