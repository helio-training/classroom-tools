const app =  require('./build').default;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => `Application started at: http://localhost:${PORT}`);
