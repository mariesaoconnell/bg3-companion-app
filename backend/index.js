const express = require('express');
const cors = require("cors");
const app = express();

const port = 3000;

// IMPORT ROUTES
allApprovalsRouter = require('./routes/allApprovals');
approvalsByActRouter = require('./routes/approvalsByAct');
companionApprovalsRouter = require('./routes/companionApprovals');
createApprovalRouter = require('./routes/createApproval');
deleteApproval = require('./routes/deleteApproval')

var corsOptions = {
	origin: 'http://localhost:3001',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to the Home Page!' });
});


app.use('/all-approvals', allApprovalsRouter);
app.use('/approvals-by-act', approvalsByActRouter);
app.use('/companion-approvals', companionApprovalsRouter);
app.use('/create-approval', createApprovalRouter);
app.use('/', deleteApproval);

// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	console.error(err.message, err.stack);
	res.status(statusCode).json({ message: err.message });
	return;
});

app.listen(port, () => {
	console.log(`App listening on Port: ${port}`);
});
