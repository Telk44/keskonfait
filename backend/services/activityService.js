exports.formatSqlToJsonresponse = (activity) => {
    return {
        id: activity.id,
        title: activity.title,
        description: activity.description,
        age: activity.Age ? activity.Age.childrenAge : null,
        category: activity.Category ? activity.Category.name : null,
        user: activity.User ? activity.User.userName : null,
        startDate: activity.startDate,
        endDate: activity.endDate,
        price: activity.price,
        phone: activity.phone,
        bookingEmail: activity.bookingEmail,
        createdAt:activity.createdAt,
        imageURL: activity.imageURL
    }
}

