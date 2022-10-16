pipeline {
    environment {
        scannerHome = tool 'sonarqube-scanner'
    }
    agent any
//         docker {
//             image 'node:lts-buster-slim'
//             args '-p 3000:3000'
//         }
    stages {
        stage("test-sonar"){
            steps{
                script {
                    withSonarQubeEnv("sonarQube") {
                        
                    sh "${scannerHome}/bin/sonar-scanner \
                        -Dsonar.projectKey=Project-Devops \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://localhost:9000 \
                        -Dsonar.login=fe722bf8f44a01cb588a693688a9baccd0ecd40f"
                        
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
