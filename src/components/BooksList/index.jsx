import React, { useEffect, useState } from 'react';
import api from "../../services/api"
import { Container, Grid2 as Grid, Card, CardContent, Typography, CircularProgress } from '@mui/material';

export default function BooksList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await api.get('/books');
                setBooks(response.data);
            } catch (error) {
                console.error('Erro ao buscar os livros:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return (
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Container>
        );
    }

    return (
        <Container sx={{ marginTop: 4 }}>
            <Grid container spacing={2}>
                {books.map((book) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={book.abbrev.pt}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{book.name}</Typography>
                                <Typography color="textSecondary">{book.author}</Typography>
                                <Typography variant="body2">{book.group}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};