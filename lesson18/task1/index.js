export const event = {
    message: 'Welcome to the party!',
    guests: [
        { name: 'John', age: 18, email: 'example@server.com' },
        { name: 'Tom', age: 16, email: 'exa@server.com' }
    ],
    getInvitations() {
        return this.guests.filter(i => i.age >= 18).map(i => {
            return {
                email: `${i.email}`,
                message: `Dear ${i.name}! ${this.message}`
            }
        })
    }
}