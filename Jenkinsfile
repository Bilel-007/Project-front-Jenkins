pipeline {
    environment {
        scannerHome = tool name: 'sonarqube-scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
    }
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    stages {
        stage("test-sonar"){
            steps{
                script {
                    withSonarQubeEnv("sonarQube") {
                        
                    sh "${scannerHome}/bin/sonar-scanner \
                      -Dsonar.projectKey=Project-Devops \
                      -Dsonar.sources=. \
                      -Dsonar.host.url=http:\/\/localhost:9000 \
                      -Dsonar.login=5d7f5fbb00f909cb1e91101e807f7d7120c550b2 "
                        
                        // "${scannerHome}/bin/sonar-scanner \
                        // -Dsonar.projectKey=project front \
                        // -Dsonar.sources=. \
                       //  -Dsonar.host.url=http://localhost:9000/ \
                       // -Dsonar.login=admin \
                       // -Dsonar.password=Bi22032021..**"
                    
                    
                    } 
                }
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') { 
            steps {
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}
