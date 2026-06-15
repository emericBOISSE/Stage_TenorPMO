import englishMessages from 'ra-language-english';

export const en = {
    ...englishMessages,
    ra: {
        ...englishMessages.ra,
        page: {
            ...englishMessages.ra.page,
            empty: 'No data available.',
            invite: 'There are no items to display here yet.',
        }
    },
    custom: {
        menu: {
            clients: 'Customers',
            articles: 'Products',
            regards: 'Manholes',
            affaires: 'Projects',
        },
        login: {
            title: 'Sign In',
            username: 'Username',
            password: 'Password',
            submit: 'Login',
        },
        user: {
            welcome: 'Connected as',
            profile: 'Change Password',
        },
        errors: {
            not_found_title: 'Page not found',
            not_found_msg: 'The URL you entered does not match any page.',
            crash_title: 'Oops! An error occurred',
            crash_msg: 'The application encountered an unexpected problem.',
            back: 'Go back',
            retry: 'Try again',
        },
        messages: {
            not_implemented: "This feature is not available yet.",
        }
    },
};