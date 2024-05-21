import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material';
import { FormEvent } from 'react';
import { UseSignUp } from '@apis/user';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();

export default function SignUp() {
    const navigator = useNavigate();
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        UseSignUp({
            accountId: data.get('accountId') as string,
            password: data.get('password') as string,
            age: data.get('age') as unknown as number,
        })
            .then((response) => {
                cookies.set('access_token', response.data.accessToken);
                alert(`회원가입에 성공하였습니다.`);
                navigator('/main');
            })
            .catch(() => {
                alert('회원가입에 실패하였습니다.');
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
                <Typography component="h1" variant="h5">
                    회원가입
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="accountId"
                                label="아이디"
                                name="accountId"
                                autoComplete="accountId"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="비밀번호"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required fullWidth name="age" label="나이 예) 17" id="name" />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        회원가입
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="signin" variant="body2">
                                로그인하기
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
