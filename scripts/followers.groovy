import twitter4j.*
import groovy.json.JsonBuilder

// 15 minutes in milliseconds
final FIFTHEEN_MINUTES = 15 * 60 * 1000

class Root {
  List<User> followers

  Root(followers) {
    this.followers = followers
  }
}

Twitter twitter = TwitterFactory.getSingleton()
twitter.getOAuth2Token()

//println twitter.showUser("laTechAmienoise")

def followersIds = twitter.getFollowersIDs("laTechAmienoise", -1)

def count = 0
List<User> followers = new ArrayList<User>()
for (id in followersIds.getIDs()) {
  println "Get user " + id
  followers.add(twitter.showUser(id))

  if (++count > 160) {
    println "Begin pause..."
    sleep(FIFTHEEN_MINUTES)
    count = 0
  }
}

def root = new Root(followers)

new File("./followers.json").write(new JsonBuilder(root).toPrettyString())
