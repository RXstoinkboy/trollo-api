const { gql } = require('apollo-server');

const typeDefs = gql`
	type Expense {
		id: ID!
		title: String
		description: String
		value: Int
		author: String!
		type(type: ExpenseTypes): String!
		label: String
		createdAt: String!
		updateAt: String!
	}w

	type Income {
		id: ID!
		title: String
		description: String
		author: ID!
		type(type: IncomeTypes): String!
		value: Int
		createdAt: String!
		updatedAt: String
	}

	type Budget {
		value: Int
		owner: ID
	}

	type User {
		id: ID!
		email: String!
		password: String!
		currency: String!
		joinedOn: String!
		active: Boolean!
		lists: [String]
		tasks: [String]
		comments: [String]
	}

	enum ExpenseTypes {
		FOOD
		HOUSEHOLD
		HEALTH
		CHILDREN
		HOBBY
		TRIPS
		BILLS
		OTHER
	}

	enum IncomeTypes {
		GIFT
		SALARY
		OTHER
	}

	type BudgetChangeResponse {
		success: Boolean
		oldBudget: Int
		newBudget: Int
	}

	type Query {
		me: User
		user(id: ID!): User
		users: [User]
		expense(id: ID!): Expense
		expenses(authorID: ID!): [Expense]
		income(id: ID!): Income
		incomes(authorID: ID!): [Income]
		budget(owner: ID!): Budget
	}

	type Mutation {
		addExpense(title: String!, description: String, value: Int!): BudgetChangeResponse!
		addIncome(title: String!, description: String, value: Int!): BudgetChangeResponse!
		login(email: String!, password: String!): String
		addUser(email: String!, password: String!): ID
		editUser(userData: User!): Boolean
		removeUser(id: ID!): Boolean
		editBudget(value: Int): BudgetChangeResponse!
	}
`;

module.exports = typeDefs;
