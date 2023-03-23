pipeline{
    agent any 

 options {
        ansiColor('xterm')
    }
    
    stages{
         stage('Ansicolor') {
            steps {
                echo '\033[34mHello\033[0m \033[33mcolorful\033[0m \033[35mworld!\033[0m'
            }
        }

           stage('Deployment'){
             steps{
               echo 'building the application'
            }
           
        }

        stage('Building'){
             steps{
               echo 'building the application'
            }
           
        }
        stage ('Pre-Build-Node'){
            steps{
                bat "npm install"
                
            }
        }
        stage ('Testing'){
            steps{
              
                bat "npx cypress run"
            }
        }

        stage('Reports'){
            steps{
                 publishHTML([allowMissing:false, alwaysLinkToLastBuild:false, keepAll: true, reportDir: 'cypress/reports/html/', reportFiles: 'index.html'])
            }
           
        }
    }

    
}