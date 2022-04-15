# rock-paper-scissors
    1. Set up a new branch on your previous Rock Paper Scissors repo
        a) Since we’ll be making a UI for our Rock Paper Scissors game, make a new branch and change to it with the command git checkout -b rps-ui.

        b)You are now working in the rps-ui branch, locally. However, this branch does not exist in your remote repo yet. If you go to your github repo             page, you’ll see that you only have 1 branch, which would be main. Let’s push this new branch to your remote repo with the command git push               origin rps-ui. Now, you’ll see two branches in your Github repository!
        
        c) Make sure you are on the rps-ui branch. You can check this, with the git branch command. The branch you are currently on will have an                      (*)asterisk next to it. If you’re in another branch for some reason, change to rps-ui with the command git checkout rps-ui. Now you’re all set            to work on your new feature! Note: You can add files, commit to this branch, and push changes to your repo, just like you would with the main               branch. Everything is the same except when you push the changes, you’d use git push origin rps-ui instead of git push origin main, since we’re             pushing to our new branch.
        
    2.  In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
    
        a) For now, remove the logic that plays exactly five rounds.
        
        b) Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct                      playerSelection every time a button is clicked. (you can keep the console.logs for this step)
        
        c) Add a div for displaying results and change all of your console.logs into DOM methods.
        
        d) Display the running score, and announce a winner of the game once one player reaches 5 points.
        
        e) You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important              part of a programmer’s life.
        f) Once you’re all done with your UI and made sure everything’s satisfactory, commit your changes to the rps-ui branch.
    3.  Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch.

        a) Checkout the branch we want to merge INTO i.e. main with the command git checkout main.

        b) Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.
        
        c)If everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and you’ll see all the commits you’ve made to your           feature branch on top of the commits you made to the main branch. Now for our final step!
        
        d) Let’s push our main branch into our remote repo by running git push origin main . Go to your Github repo and you’ll see that our main branch              will have all the changes and commits you made to the rps-ui branch. Congratulations! You’ve successfully pushed your first feature into your              production branch!
        e) Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore. Let’s do some cleanup, both locally and in              the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on Github with git                push --delete origin rps-ui. Congrats, we’re all done with our cleanup!
