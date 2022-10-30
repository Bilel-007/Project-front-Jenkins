pipeline {
    environment {
        imagename = "bilel707/projectfront"
        scannerHome = tool name: 'sonarqube-scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
        registryCredential = 'Docker_hub'
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
                            -Dsonar.login=c8b2c764943238488fb46caf357927b330c86cbf"
                        
                    
                    } 
                }
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'CI=false npm run build'
            }
        }
        
        stage("docker-build"){
            steps{
                script {
                    dockerImage = docker.build imagename   
                }
            }
        }
        
        
        stage("docker-deploy-img"){
            steps{
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push('latest')
                    }
                }
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
