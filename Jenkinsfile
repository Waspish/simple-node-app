pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Waspish/simple-node-app.git'
            }
        }

        stage('Build and Test with Docker Compose') {
            steps {
                script {
                    // Запускаем контейнеры в фоне и пересобираем при необходимости
                    sh 'docker-compose up -d --build'

                    // Ждем, пока приложение запустится
                    sleep time: 10, unit: 'SECONDS'

                    // Запускаем тесты внутри контейнера
                    sh 'docker-compose exec -T node-app npm test'
                }
            }
            post {
                always {
                    // Останавливаем контейнеры после выполнения
                    sh 'docker-compose down'
                }
            }
        }
    }

    post {
        always {
            // Очистка Docker (опционально)
            sh 'docker system prune -f'
        }
    }
}