const newLink = {
  subscribe: (parent, args, ctx, info) => {
    return ctx.db.subscription.link({}, info)
  }
}

const newVote = {
  subscribe: (parents, args, ctx, info) => {
    return ctx.db.subscription.vote({}, info)
  }
}

module.exports = {
  newLink,
  newVote
}